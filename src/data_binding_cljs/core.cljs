(ns data-binding-cljs.core
  (:require [jayq.core :as jq]
            [hiccups.runtime :as hiccups])
  (:use-macros [hiccups.core :only (html)]
               [data-binding-cljs.macros :only (deftemplate render render*
                                                data-binding model-bind ;wrap
                                                )]))

;; UTILITIES
(defn log [& stuff]
  (.log js/console (apply str stuff)))

(defn exist?
  "returns true, if x is neither null nor undefined"
  ([x] (and (not= js/undefined x) (not= nil x)))
  ([& xs] (every? exist? xs)))


; Core framework code

; used to hold the code that should be executed to re-render the node currently being rendered
(declare ^:dynamic *template-id*)
(declare ^:dynamic *template-fn*)

(defn re-render-template [template-id template-fn]
  (let [old-content (jq/$ (str "[data-templateuuid='" template-id "']"))]
    (. old-content (replaceWith (fn [] (render* (template-fn) template-fn))))))

(defprotocol IBindable
  "Getters and setters which handle the required callbacks to update any bound elements"

  ; return the value to be used for view elements that are bound to the bindable, having
  ; registered any callbacks required to ensure the appropriate element is updated when
  ; the bindable is changed.
  (-get [this])

  ; change the value of the callback and execute the callbacks that are required to update
  ; the bound view elements.
  (-set [this value]))

; TODO change this so it implements IBindable
(deftype Bindable [state meta validator watches]
  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this]
    (do
      (when (exist? *template-fn* *template-id*)
        (let [watch-key (symbol *template-id*)
              template-id *template-id*
              template-fn *template-fn*]
          (add-watch this watch-key
                     (fn []
                       (remove-watch this watch-key)
                       (re-render-template template-id template-fn)))))
      state))

  IMeta
  (-meta [_] meta)

  ^:deprecation-nowarn IPrintable
  (-pr-seq [a opts]
    (concat  ["#<Bindable: "] (-pr-seq state opts) ">"))

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<Bindable: ")
    (-pr-writer state writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [this oldval newval]
    (doseq [[key f] watches]
      (f key this oldval newval)))
  (-add-watch [this key f]
    (set! (.-watches this) (assoc watches key f)))
  (-remove-watch [this key]
    (set! (.-watches this) (dissoc watches key)))

  IHash
  (-hash [this] (goog.getUid this)))

(defn binding-type
  [node _]
  (let [tag (keyword (.-tagName node))]
    (cond 
      (= tag :INPUT) [:INPUT (-> node jq/$ (jq/attr "type") keyword)]
      :otherwise tag)))

(defmulti apply-single-binding binding-type :default :default)

(defmethod apply-single-binding [:INPUT :text]
  [node bound]
  (let [current @bound]
    (-> (jq/$ node)
      (jq/val current)
      (jq/on :change (fn [e]
                       (let [newval (jq/val (jq/$ node))]
                         (reset! bound newval)))))))

(defmethod apply-single-binding [:INPUT :checkbox]
  [node bound]
  (let [current @bound]
    (-> (jq/$ node)
      (jq/attr :checked current)
      (jq/on :change (fn [e]
                       (let [newval (jq/attr (jq/$ node) "checked")]
                         (reset! bound newval)))))))

(defmethod apply-single-binding :default
  [node bound]
  (let [current @bound]
    (-> (jq/$ node)
      (jq/text current))))

(defn apply-binding
  [node-set bound]
  (doseq [node node-set]
      (apply-single-binding node bound)))

(defn bindable
  ([x]
    (Bindable. x nil nil nil))
  ([x & {:keys [meta validator]}]
    (Bindable. x meta validator nil)))

(defn wrap [content & {:keys [with at]}]
  (let [wrapper (jq/$ with)
        loc (if (exist? at)
              (jq/find wrapper at)
              wrapper)]
     (doseq [form content]
       (jq/append loc form))
     wrapper))

(defn insert
  [parent content & {:keys [at before after]}]
  (let [insertion-method (cond
                           at     #(.replaceWith %1 %2)
                           before #(.before %1 %2)
                           after  #(.after %1 %2))
        wrapper (jq/$ parent)]
    (-> wrapper
      (jq/find (or at before after))
      (insertion-method content))
    wrapper))


; Application specific code

(defn mk-uid [model]
  (-> model gensym name))

(defrecord TodoItem [uid desc done?])

(defn todo
  [desc done?]
  (TodoItem. (mk-uid "todo") (bindable desc) (bindable done?)))

(defn done?
  [t]
  (deref (:done? t)))

(defn remaining-items
  [tds]
  (->> tds
    (filter done?)
    count))

(defn bind-todo
  [content td]
  (model-bind content td ".desc" :desc, ".done" :done?))

(defn todo-template
  [td]
  (-> (html [:div
             [:input.done {:type :checkbox}]
             [:input.desc {:type :text}]])
    (bind-todo td)))

(def todo-items
  (bindable (list (todo "Write data-binding framework" true)
                  (todo "Make todo app example" false)
                  (todo "Extend data-binding framework" false))))

(def $main (jq/$ "#main"))

(deftemplate todo-list-summary
  [todo-list]
  [:h1 (str (remaining-items @todo-list) " items finished")])

(defn todo-list-view [items]
  (-> (for [item @items]
        (render (todo-template item)))

    (wrap :with (render
                  (html [:div#not-list
                         [:div#summary]
                         [:div#list]]))
          :at :#list)

    (insert (render (todo-list-summary items)) :at :#summary)))

(jq/append $main (render (todo-list-view todo-items)))

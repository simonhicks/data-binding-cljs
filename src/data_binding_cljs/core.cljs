(ns data-binding-cljs.core
  (:require [jayq.core :as jq])
  (:use [data-binding-cljs.util :only (log exist?)])
  (:use-macros [data-binding-cljs.macros :only (render*)]))

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

; TODO handle more input types

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

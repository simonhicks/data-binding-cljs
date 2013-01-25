(ns data-binding-cljs.core
  (:require [jayq.core :as jq]
            [hiccups.runtime :as hiccups])
  (:use-macros [hiccups.core :only (html)]
               [data-binding-cljs.macros :only (deftemplate render)]))

; TODO
;
; - split this out into utils, framework and application code
; - refactor it so it's not quite so ugly

; PLAN
;
; data-binding through the 'data-bind' macro/function
;
;   (data-bind [selector1 binding-function1
;               selector2 binding-function2]
;     [:div
;      ...])
;
; should be able to use this inside a render expression or as part of a template... If possible,
; I'd like to change deftemplate to make this possible
;
;     (deftemplate user-status
;       [user]
;       (data-bind ['#status' (partial swap! (:status user))]
;         [:form
;          [:input#status]]))
;
; but if that doesn't work, at the very least this:
;
;     (deftemplate user-status*
;       [user]
;       [:form
;        [:input#status]]))
;
;     (defn user-status
;       [user]
;       (data-bind ['#status' (partial swap! (:status user))]
;         (user-status* user)))
;
; REQUIREMENTS
;
; - Must be templating language independent
; - Must handle a deref'd Bindable and a bound Bindable in the same template without an infinite loop
; - Must support all types of input, textarea, etc. 
; - Should replace all the current state of the inputs, textarea, etc. on rerender
; - Should support destructuring (will need to replace the strings/keywords with valid symbols before
;   using destructure, but it should work!)

; Core framework code

; used to hold the code that should be executed to re-render the node currently being rendered
(declare ^:dynamic *template-id*)
(declare ^:dynamic *template-fn*)
(declare ^:dynamic *template-args*)

;; UTILITIES
(def $ jq/$)

(defn log [& stuff]
  (.log js/console (apply str stuff)))

(defn exist?
  "returns true, if x is neither null nor undefined"
  ([x] (and (not= js/undefined x) (not= nil x)))
  ([& xs] (every? exist? xs)))

;; DATA BINDING STUFF

(defn re-render-template [template-id template-fn template-args]
  (let [selector (str "[data-templateuuid='" template-id "']")]
    (. ($ selector) (replaceWith (fn [] (render template-fn template-args))))))

(deftype Bindable [state meta validator watches]
  IEquiv
  (-equiv [o other] (identical? o other))

  IDeref
  (-deref [this]
    (do
      (when (exist? *template-fn* *template-id* *template-args*)
        (let [watch-key (symbol *template-id*)
              template-id *template-id*
              template-fn *template-fn*
              template-args *template-args*]
          (add-watch this watch-key
                     (fn []
                       (remove-watch this watch-key)
                       (re-render-template template-id template-fn template-args)))))
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

(defn bindable
  ([x]
    (Bindable. x nil nil nil))
  ([x & {:keys [meta validator]}]
    (Bindable. x meta validator nil)))


; Application specific code

(defrecord Person [first last id])

(defn full-name [person]
  (str @(:first person) \space @(:last person)))

(deftemplate greeting-template
  [person]
  [:div
   [:h1 (str "Hello, " (full-name person) "!")]])

(def $main ($ "#main"))

(def me (Person. (bindable "Simon") (bindable "Hicks") 1))
(def princess (Person. (bindable "Linda") (bindable "Guyse") 2))

(let [node1 (render greeting-template [me])
      node2 (render greeting-template [princess])]
  (-> $main
    (jq/append node1)
    (jq/append node2)))



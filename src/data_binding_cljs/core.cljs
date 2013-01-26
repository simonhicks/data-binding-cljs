(ns data-binding-cljs.core
  (:require [jayq.core :as jq]
            [hiccups.runtime :as hiccups])
  (:use-macros [hiccups.core :only (html)]
               [data-binding-cljs.macros :only (deftemplate render render* data-binding)]))

; Random concepts...
;
; change from `data-bindings` to `view-bindings`, and make the first string an event spec (like jquery
; delegate (then use delegate))
;
; Then snippets can easily be defined as functions, which act as combinators by appling view-bindings
; (or possibly even something else, like wrapping with more content or modifying in some other way)
;
; widgets, views, templates and even whole pages can then be composed with functions acting as the
; html tag extensions I previously envisaged.

; TODO
;
; - split this out into utils, framework and application code
; - refactor it so it's not quite so ugly
; - make some sort of plan for handling lists

; REQUIREMENTS
;
; - Must be templating language independent
; - Must handle a deref'd Bindable and a bound Bindable in the same template without an infinite loop
; - Must support all types of input, textarea, etc. 
; - Should replace all the current state of the inputs, textarea, etc. on rerender
; - Should maintain focus on rerender
; - Should allow additional configuration (ie. change/keyup/other events etc.)
;
; Implementation details.
;
; IBindable should include methods for setting and getting while handling the appropriate callback
; stuff as detailed in the comments below. Re-rendering can continue to be handled by the current
; system.
;
; `Bindable` objects should also implement IDeref so they can be used with deref (ie @) as seen in 
; the existing template. (along with other obvious stuff like the printable protocols and IMeta)
;
; Bindings can also be created using the data-bindings macro. This performs the following series of
; steps:
;
; 1. executes the code it's given and passes it to jayq.core/$
;
; 2. `-get`s the values from the bound IBindable objects and uses some helper function to set the
;    appropriate view elements. Since this all happens inside the render operation, the dynamic vars
;    will all be set so as to register the template for re-rendering on change (just as when a
;    bindable is accessed directly inside the template.
;
; 3. sets up the onchange handlers for the template to use the bindable's `-set` method.
;
; With the current setup, this will work either inside the template fn or outside the template with
; any library :)
;
;
; Helpers
;
; Can also implement some helpers for creating more complex bindables, like a `bindable-fn` macro:
;
;   (bindable-fn
;     (get [] (blah blah blah))
;     (set [v] (blah blah blah v)))
;


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


; Application specific code

(defrecord Person [first last])

(defn full-name [person]
  (str @(:first person) \space @(:last person)))

(defn greeting-template
  [person]
  (data-binding ["#first" (:first person)
                 "#last" (:last person)]
    (html
      [:div
       [:span
        [:input#first {:type :text}]
        [:input#last {:type :text}]]
       [:h1 (str "Hello, " (full-name person) "!")]])))


(def $main (jq/$ "#main"))

(def me (Person. (bindable "Simon") (bindable "Hicks") 1))
(def princess (Person. (bindable "Linda") (bindable "Guyse") 2))

(let [node1 (render (greeting-template me))
      node2 (render (greeting-template princess))]
  (-> $main
    (jq/append node1)
    (jq/append node2)))



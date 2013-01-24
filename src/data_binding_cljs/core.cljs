(ns data-binding-cljs.core
  (:require [jayq.core :as jq]
            [hiccups.runtime :as hiccups])
  (:refer-clojure :exclude [atom])
  (:use-macros [hiccups.core :only (html)]
               [data-binding-cljs.macros :only (deftemplate render)]))

; TODO
;
; - split this out into utils, framework and application code
; - refactor it so it's not quite so ugly
; - find a way to wrap atom without duplicating the entire of Atom

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

(deftype WrappedAtom [state meta validator watches]
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
    (concat  ["#<WrappedAtom: "] (-pr-seq state opts) ">"))

  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#<WrappedAtom: ")
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

(defn atom
  ([x]
    (WrappedAtom. x nil nil nil))
  ([x & {:keys [meta validator]}]
    (WrappedAtom. x meta validator nil)))


; Application specific code

(defrecord Person [first last id])

(defn full-name [person]
  (str @(:first person) \space @(:last person)))

(deftemplate greeting-template
  [person]
  [:div
   [:h1 (str "Hello, " (full-name person) "!")]])

(def $main ($ "#main"))

(def me (Person. (atom "Simon") (atom "Hicks") 1))
(def princess (Person. (atom "Linda") (atom "Guyse") 2))

(let [node1 (render greeting-template [me])
      node2 (render greeting-template [princess])]
  (-> $main
    (jq/append node1)
    (jq/append node2)))



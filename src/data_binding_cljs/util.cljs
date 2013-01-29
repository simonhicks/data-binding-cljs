(ns data-binding-cljs.util)

(defn log [& stuff]
  (.log js/console (apply str stuff)))

(defn exist?
  "returns true, if x is neither null nor undefined"
  ([x] (and (not= js/undefined x) (not= nil x)))
  ([& xs] (every? exist? xs)))

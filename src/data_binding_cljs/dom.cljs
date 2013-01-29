(ns data-binding-cljs.dom
  (:use [data-binding-cljs.util :only (exist?)])
  (:require [jayq.core :as jq]))

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

(defn events
  [content specs]
  (let [node (jq/$ content)]
    (doseq [[selector event-map] specs
            [event-type callback] event-map]
      (jq/delegate content selector event-type callback)) ; FIXME should this use jq/on ?
    node))

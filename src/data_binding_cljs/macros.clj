(ns data-binding-cljs.macros
  (:use [hiccups.core :only (html)]))

(defmacro deftemplate
  [name args form]
  `(defn ~name ~args (jayq.core/$ (html ~form))))

(defmacro render
  [template args]
  (let [template-code `(apply ~template ~args)]
    `(let [template-id# (name (gensym))]
      (binding [data-binding-cljs.core/*template-id* template-id#
                data-binding-cljs.core/*template-fn* ~template
                data-binding-cljs.core/*template-args* (apply vector ~args)]
        (jayq.core/attr ~template-code :data-templateuuid template-id#)))))

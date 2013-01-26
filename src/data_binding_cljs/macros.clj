(ns data-binding-cljs.macros
  (:use [hiccups.core :only (html)]))

(defmacro deftemplate
  [name args form]
  `(defn ~name ~args (html ~form)))

(defmacro data-binding
  [bindings form]
  `(let [node# (jayq.core/$ ~form)]
     (doseq [[selector# bound#] (partition 2 ~bindings)]
       (-> node#
         (jayq.core/find selector#)
         (data-binding-cljs.core/apply-binding bound#)))
     node#))

(defmacro render*
  [code code-as-fn]
  `(let [template-id# (name (gensym))]
    (binding [data-binding-cljs.core/*template-id* template-id#
              data-binding-cljs.core/*template-fn* ~code-as-fn]
      (-> ~code
        (jayq.core/$)
        (jayq.core/attr :data-templateuuid template-id#)))))

(defmacro render
  [code]
  `(render* ~code (fn [] ~code)))

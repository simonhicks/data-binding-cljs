(ns data-binding-cljs.macros
  (:use [hiccups.core :only (html)]))

(defmacro deftemplate
  [name args form]
  `(defn ~name ~args (html ~form)))

(defmacro data-binding
  [content bindings]
  `(let [node# (jayq.core/$ ~content)]
     (doseq [[selector# bound#] ~bindings]
       (-> node#
         (jayq.core/find selector#)
         (data-binding-cljs.core/apply-binding bound#)))
     node#))

(defmacro model-bind
  "bind selectors to multiple aspects of a single data structure.
  bind-map should be a map of jquery selectors to functions. Each
  jquery selector will be bound to the bindable returned by calling the
  associated function on `instance`"
  [content instance bind-map]
  (let [bindings (reduce (fn [acc [sel func]]
                           (concat acc [sel (list func instance)]))
                         '() bind-map)]
    `(data-binding ~content (hash-map ~@bindings))))

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

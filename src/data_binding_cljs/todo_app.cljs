(ns data-binding-cljs.todo-app
  (:use [data-binding-cljs.core :only (bindable)]
        [data-binding-cljs.dom :only (wrap insert events)])
  (:require [jayq.core :as jq]
            [hiccups.runtime :as hiccups])
  (:use-macros [hiccups.core :only (html)]
               [data-binding-cljs.macros :only (deftemplate render model-bind)]))

(defn mk-uid [model]
  (-> model gensym name))

(defrecord TodoItem [uid desc done? editing?])

(defn todo
  [desc done? editing?]
  (TodoItem. (mk-uid "todo") (bindable desc) (bindable done?) (bindable editing?)))

(defn done?
  [t]
  (deref (:done? t)))

(defn editing?
  [t]
  (deref (:editing? t)))

(defn remaining-items
  [tds]
  (->> tds
    (filter done?)
    count))

(defn delete-todo
  [todo-list uid]
  (filter #(not= uid (:uid %)) todo-list))

(def todo-items
  (bindable (vector (todo "Write data-binding framework" true false)
                    (todo "Make todo app example" false false)
                    (todo "Extend data-binding framework" false false))))


(defn todo-template
  [td]
  (-> (html [:div
             [:input.done {:type :checkbox}]

             (if (editing? td)
               [:input.desc {:type :text, :style "width: 100px;"}]
               [:span.desc {:style "width: 100px;"}])

             [:span.close "[x]"]])

    (model-bind td {:.done :done?,
                    :.desc :desc})
    
    (events {:.close {:click #(swap! todo-items delete-todo (:uid td))}
             :input.desc {:dblclick (fn [this] (reset! (:editing? td) false))}
             :span.desc  {:dblclick (fn []
                                  (do
                                    (doseq [i @todo-items :when (and (not= i td) (editing? i))]
                                      (reset! (:editing? i) false))
                                    (swap! (:editing? td) not)))}})))

(def $main (jq/$ "#main"))

(deftemplate todo-list-summary
  [todo-list]
  [:h1 (str (remaining-items @todo-list) " items finished")])

(deftemplate add-todo-button []
  [:span#add-item {:style "border: 1px black solid; margin: 8px; padding: 2px;"}
   "Add Todo Item"])

(defn todo-list-view [items]
  (-> (for [item @items]
        (render (todo-template item)))

    (wrap :with (render
                  (html [:div#not-list
                         [:div#summary]
                         [:div#list {:style "clear: both; margin-bottom: 10px;"}]]))
          :at :#list)

    (insert (render (todo-list-summary items)) :at :#summary)
    
    (insert (render (add-todo-button)) :after :#list)
    
    (events {:#add-item {:click (fn [] (swap! items conj (todo "" false true)))}})))

(jq/append $main
  (render (todo-list-view todo-items)))

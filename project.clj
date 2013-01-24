(defproject data-binding-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME" ; FIXME Add a website 
  :license {:name "Eclipse Public License" ; FIXME THINK ABOUT WHAT LICENSE YOU WANT TO USE HERE!!!! 
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins      [[lein-cljsbuild "0.2.10"]]
  :cljsbuild {
    :builds [{
      :source-path "src/"
      :compiler {
        :output-to "app/main.js"
        :optimizations :whitespace
        :pretty-print true}}]}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [jayq "2.0.0"]
                 [hiccups "0.2.0"]])

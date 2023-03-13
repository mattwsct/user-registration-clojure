(ns tailwind.db
  (:require [reagent.core :as r]))

(defonce state (r/atom {:auth? false
                        :user-dropdown? false}))
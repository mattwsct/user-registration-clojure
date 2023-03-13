(ns registration-app.events
  (:require
   [re-frame.core :as re-frame]
   [registration-app.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

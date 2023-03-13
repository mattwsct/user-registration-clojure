(ns abbeal.views
  (:require [abbeal.events :as events]
            [abbeal.db :as db]
            [reagent.core :as r]))

(def email (r/atom ""))
(def tel (r/atom ""))
(defn login []
  (events/login))
(defn logout []
  (reset! email "")
  (reset! tel "")
  (events/logout))
(defn validate-email [email-str]
  (let [email-pattern #"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
        match (re-matches email-pattern email-str)]
    (if match
      true
      false)))
(defn validate-tel [tel-str]
  (let [tel-pattern #"\d{7,}"
        match (re-matches tel-pattern tel-str)]
    (if match
      true
      false)))

(defn public []
  [:div {:class "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"}
   [:div {:class "sm:mx-auto sm:w-full sm:max-w-md"}
    [:h2 {:class "mt-6 text-center text-3xl font-extrabold text-gray-900"} "Register your account"]
    [:p {:class "mt-2 text-center text-sm text-gray-600 max-w"} "Enter a valid email, or a phone number (at least 7 digits)"]]
   [:div {:class "mt-8 sm:mx-auto sm:w-full sm:max-w-md"}
    [:div {:class "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"}
     [:div {:class "space-y-6"}
      [:div
       [:label {:for "email" :class "block text-sm font-medium text-gray-700"} "Email address"]
       [:div {:class "mt-1"}
        [:input {:id "email" :name "email" :type "email" :class "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                 :on-change #(reset! email (-> % .-target .-value))}]]]
      [:div
       [:label {:for "tel" :class "block text-sm font-medium text-gray-700"} "Phone number"]
       [:div {:class "mt-1"}
        [:input {:id "tel" :name "tel" :type "tel" :class "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                 :on-change #(reset! tel (-> % .-target .-value))}]]]
      [:div
       (if (or (validate-email @email)
               (validate-tel @tel))
         [:button {:type "submit"
                   :on-click #(login)
                   :class "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"}
          "Register"]
         [:button {:type "button"
                   :disabled "true"
                   :class "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"}
          "Register"])]]]]])

(defn authenticated
  []
  [:div {:class "h-screen flex overflow-hidden bg-white"}
   [:div {:class "hidden lg:flex lg:flex-shrink-0"}
    [:div {:class "flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100"}
     [:div {:class "flex items-center flex-shrink-0 px-6"}
      [:div {:class "text-center text-3xl font-bold text-gray-900"} "Abbeal"]]
     [:div {:class "h-0 flex-1 flex flex-col overflow-y-auto"}
      [:div {:class "px-3 mt-6 relative inline-block text-left"}
       [:div
        [:button {:type "button"
                  :on-click #(events/toggle-user-dropdown)
                  :class "group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                  :id "options-menu"
                  :aria-expanded "false"
                  :aria-haspopup "true"}
         [:span {:class "flex w-full justify-between items-center"}
          [:span {:class "flex min-w-0 items-center justify-between space-x-3"}
           [:img {:class "w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" :src "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixqx=4cZVjZZC0A&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" :alt ""}]
           [:span {:class "flex-1 min-w-0 text-left"}
            [:span {:class "text-gray-900 text-sm font-medium truncate"} "Hello there!"]
            [:br]
            [:span {:class "text-gray-500 text-sm truncate"} (if (not= @email "") @email @tel)]]]
          [:svg {:class "flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 20 20" :fill "currentColor" :aria-hidden "true"}
           [:path {:fill-rule "evenodd" :d "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" :clip-rule "evenodd"}]]]]]
       (when (:user-dropdown? @db/state)
         [:div {:class "z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none" :role "menu" :aria-orientation "vertical" :aria-labelledby "options-menu"}
          [:div {:class "py-1" :role "none"}
           [:a {:href "#"
                :on-click #(logout)
                :class "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" :role "menuitem"}
            "Logout"]]])]
      [:nav {:class "px-3 mt-6"}
       [:div {:class "space-y-1"}
        [:a {:href "#" :class "bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"}
         [:svg {:class "text-gray-500 mr-3 h-6 w-6" :xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24" :stroke "currentColor" :aria-hidden "true"}
          [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}]] "Home"]]]]]]
   [:div {:class "flex flex-col w-0 flex-1 overflow-hidden"}
    [:main {:class "flex-1 relative z-0 overflow-y-auto focus:outline-none" :tabIndex "0"}
     [:div {:class "px-4 mt-6 sm:px-6 lg:px-8"}
      [:h2 {:class "text-gray-500 text-xs font-medium uppercase tracking-wide"} "Registration complete"]
      [:p {:class "mt-2 text-sm text-gray-600 max-w"} "Thank you for registering! "]]]]])
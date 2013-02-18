OnlineGameDataBase::Application.routes.draw do

 resource :profile do
   resources :games
 end
  
  get "profile" => "profiles#show", as: "profile"
  
  #get "games/:id" => "games#add_to_profile"
  get "pages/startscreen", as: "startscreen"
  
  resources :ratings, only: [ :create, :update]
  resources :users, only: [:new, :create]
  get "users/new", as: "register"

  resources :games
  root to: 'pages#startscreen'

  get "login" => "sessions#new", as: "login"  
  post "sessions" => "sessions#create", as: "sessions"
  delete "logout" => "sessions#destroy", as: "logout"

end

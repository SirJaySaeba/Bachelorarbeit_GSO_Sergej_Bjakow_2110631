VideospielDatenbank::Application.routes.draw do

    
  resources :games
  resources :users
  resources :ratings, only: [ :create, :update]
  resources :sessions, only: [:new, :create, :destroy]

  match '/newgame', to: 'games#new'
  match '/signup',  to: 'users#new'                         #get "signup" => "users#new", as: "signup"
  match '/signin',  to: 'sessions#new'                      #get "signin" => "sessions#new", as: "signin"
  match '/signout', to: 'sessions#destroy', via: :delete    #delete "signout" => "sessions#destroy", as: "signout"
  
  root to: 'pages#home'
 
end

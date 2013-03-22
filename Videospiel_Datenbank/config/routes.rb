VideospielDatenbank::Application.routes.draw do

    
  get "reviews/create"

  get "reviews/new"

  resources :games
  resources :users
  resources :ratings, only: [ :create, :update]
  resources :sessions, only: [:new, :create, :destroy]
  resources :reviews, only: [:create, :destroy, :show]
  
  get "games/:id/reviews/:id" => "reviews#show", as: "review"
  match '/newreview', to: 'reviews#new'
  match '/newgame', to: 'games#new'
  match '/signup',  to: 'users#new'                         #get "signup" => "users#new", as: "signup"
  match '/signin',  to: 'sessions#new'                      #get "signin" => "sessions#new", as: "signin"
  match '/signout', to: 'sessions#destroy', via: :delete    #delete "signout" => "sessions#destroy", as: "signout"
  
  root to: 'pages#home'
 
end

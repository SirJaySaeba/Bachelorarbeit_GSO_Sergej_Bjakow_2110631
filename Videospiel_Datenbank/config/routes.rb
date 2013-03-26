VideospielDatenbank::Application.routes.draw do


  resources :users do
    member do
      get :following
    end
  end

  resources :games do
    member do
      get :followers
    end
  end
  
  resources :ratings, only: [ :create, :update]
  resources :sessions, only: [:new, :create, :destroy]
  resources :reviews
  resources :gamerelations, only: [:create, :destroy]
  
  #get "games/:id/reviews/:id" => "reviews#show", as: "review"
  #delete "games/:id/reviews/:id" => "reviews#destroy", as: "delrev"
  
  match '/newreview', to: 'reviews#new'
  match '/newgame', to: 'games#new'
  match '/signup',  to: 'users#new'                         #get "signup" => "users#new", as: "signup"
  match '/signin',  to: 'sessions#new'                      #get "signin" => "sessions#new", as: "signin"
  match '/signout', to: 'sessions#destroy', via: :delete    #delete "signout" => "sessions#destroy", as: "signout"
  
  root to: 'pages#home'
 
end

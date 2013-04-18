VideospielDatenbank::Application.routes.draw do


  resources :users do
    member do
      get :following
    end
    #resources :reviews
  end

  resources :games do
    member do
      get :followers
    end
    resources :reviews
  end
  
  resources :ratings, only: [:show, :edit]
  post "ratings" => "ratings#create_and_update"
  put "ratings/:id" => "ratings#create_and_update"

  #match "ratings" => "ratings#create_and_update", :via => :post
  #match "ratings/:id" => "ratings#create_and_update", :via => :put

  resources :sessions, only: [:new, :create, :destroy]
  #resources :reviews

  resources :gamerelations, only: [:create, :destroy]
  
  get "games/:game_id/reviews/:id" => "reviews#show", as: "show_review"
  #delete "games/:game_id/reviews/:id" => "reviews#destroy", as: "delrev"
  
  match '/signup',  to: 'users#new'                         #get "signup" => "users#new", as: "signup"
  match '/signin',  to: 'sessions#new'                      #get "signin" => "sessions#new", as: "signin"
  match '/signout', to: 'sessions#destroy', via: :delete    #delete "signout" => "sessions#destroy", as: "signout"
  
  root to: 'pages#home'
 
end

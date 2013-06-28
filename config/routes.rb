VideospielDatenbank::Application.routes.draw do

  resources :users do
    member do
      get :owned_games
    end
  end

  resources :games do
    member do
      get :owners
    end
    resources :reviews
  end

  get "ratings/:id" => "ratings#ding", as: "rating"
  post "ratings" => "ratings#create_and_update"   #match "ratings" => "ratings#create_and_update", :via => :post
  put "ratings/:id" => "ratings#create_and_update"   #match "ratings/:id" => "ratings#create_and_update", :via => :put


  resources :sessions, only: [:new, :create, :destroy]
  resources :relationships, only: [:create, :destroy]

  
  match '/signup',  to: 'users#new'                         #get "signup" => "users#new", as: "signup"
  match '/signin',  to: 'sessions#new'                      #get "signin" => "sessions#new", as: "signin"
  match '/signout', to: 'sessions#destroy', via: :delete    #delete "signout" => "sessions#destroy", as: "signout"
  
  root to: 'pages#home'
  get "help" => "pages#help"
  get "about", to: "pages#about", as: "about"
 
end

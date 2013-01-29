OnlineGameDataBase::Application.routes.draw do
  resources :games

  get "pages/startscreen", as: "startscreen"
  
  get "users/new", as: "register"
  
  
  
  get "games/new"
  get "games/:id" => "games#show"
  #get "games" => "games#index"
  
  
  
  get "login" => "sessions#new", as: "login"  
  post "sessions" => "sessions#create", as: "sessions"
  delete "logout" => "sessions#destroy", as: "logout"
  resources :users, only: [:new, :create]

  root to: 'pages#startscreen'
end

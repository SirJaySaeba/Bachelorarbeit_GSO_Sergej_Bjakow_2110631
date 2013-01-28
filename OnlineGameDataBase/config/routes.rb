OnlineGameDataBase::Application.routes.draw do
  get "pages/startscreen", as:  "startscreen"
  
  get "users/new", as: "register"
  
  get "login" => "sessions#new", as: "login"  
  post "sessions" => "sessions#create", as: "sessions"
  delete "logout" => "sessions#destroy", as: "logout"
  resources :users, only: [:new, :create]

  root to: 'pages#startscreen'
end

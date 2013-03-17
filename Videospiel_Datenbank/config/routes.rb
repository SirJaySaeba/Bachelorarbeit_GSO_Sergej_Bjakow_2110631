VideospielDatenbank::Application.routes.draw do
  get "users/new"
  root to: 'pages#home'
  get "signup" => "users#new", as: "signup"     #  match '/signup',  to: 'users#new'
  get "pages/profile"

 
end

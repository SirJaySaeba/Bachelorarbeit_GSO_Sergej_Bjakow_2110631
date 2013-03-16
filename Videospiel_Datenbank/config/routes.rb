VideospielDatenbank::Application.routes.draw do
  root to: 'pages#home'

  get "pages/home"

  get "pages/profile"

 
end

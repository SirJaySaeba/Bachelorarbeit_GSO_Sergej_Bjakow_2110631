OnlineGameDataBase::Application.routes.draw do
  get "pages/startscreen"

  root to: 'pages#startscreen'
end

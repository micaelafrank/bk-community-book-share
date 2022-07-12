Rails.application.routes.draw do
  namespace :api do
    resources :reviews
    resources :books, only: [:index, :create, :show]
    resources :admin_access_only, only: [:update, :destroy]

    post "/signup", to: "user#create"
    get "/me", to: "user#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end 
  
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
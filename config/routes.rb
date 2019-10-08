Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
    
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :shelved_books, only: [:create, :destroy, :index]
      resources :shelves, only: [:create, :destroy, :update, :index, :show]
      resources :reviews, only: [:create, :destroy, :update]
    end
end
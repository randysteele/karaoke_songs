Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  ActiveSupport::Inflector.inflections(:en) do |inflect|
    inflect.acronym 'API'
  end

  namespace :api do 
    namespace :v1 do
      resources :songs
      resources :genres
    end
  end
end



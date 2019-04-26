Rails.application.routes.draw do
  resources :pessoa_consulta do
  	collection do
  		get 'get_negative'
  	end
  end

  resources :pessoas do
  	collection do
  		get 'get_negative'
  	end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
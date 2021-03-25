Rails.application.routes.draw do

  root 'posts#index' # 本番環境で開くときに必要なため、仮置きしている
  get 'posts', to: 'posts#index'  # ※カリキュラムではこちらのみ設定する仕様。上はいらない。


  get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
    
end

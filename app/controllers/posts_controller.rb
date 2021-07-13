class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    #投稿新しい順 全ての投稿
  end

  #def new
  #end

  def create
    post = Post.create(content: params[:content])
      #post変数に新投稿入れる
    render json:{ post: post }
      #データをjson形式で返却 post変数はそのまま
  end
end

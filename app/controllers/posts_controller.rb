class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
    #投稿新しい順 全ての投稿
  end

  #def new
  #end

  def create
    Post.create(content: params[:content])
    redirect_to action: :index
    #メモ保存後はindexへ
  end
end

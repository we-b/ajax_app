class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")

    #id降順にする。
  end

  # コメントアウトする
  # def new
  # end

  def create

    post = Post.create(content: params[:content])
    render json:{ post: post }
  end
end

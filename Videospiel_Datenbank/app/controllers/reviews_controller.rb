class ReviewsController < ApplicationController  
  before_filter :require_login, only: [:create, :destroy]

  def index
  end
  
  def create
    @review = current_user.reviews.build(params[:review])
    #@review = @game.reviews.build(params[:review])
    if @review.save
      flash[:success] = "review created!"
      redirect_to root_url
    else
      render 'new'
    end
  end

  def new
    @review = Review.new
  end
  
  def show
    @review = Review.find(params[:id])
  end
  
end

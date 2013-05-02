class ReviewsController < ApplicationController  
  before_filter :require_login, only: [:create, :destroy]
  before_filter :correct_user,   only: :destroy
  def index
  end
  
  def create
    @game = Game.find_by_id(params[:game_id])
    @review = current_user.reviews.build(params[:review])
    @review.game_id = @game.id
    @review.user_id = current_user.id
    #@review = @game.reviews.build(params[:review])
    #@review.game_id = Game.find_by_id(params[:game_id])
        
    
    if @review.save
      flash[:success] = "review created!"
      redirect_to root_url
    else
      render 'new'
    end
  end

  def new
    @review = Review.new(params[:review])
    @game = Game.find_by_id(params[:game_id])
    @review.game_id = @game.id
  end
  
  def show
    @review = Review.find(params[:id])
  end
  
  def destroy
    @review.destroy
    #Review.find(params[:id]).destroy
    redirect_to game_path(@game)
  end
  
  private

    def correct_user
      @review = current_user.reviews.find_by_id(params[:id])
      redirect_to root_url if @review.nil?
    end
  
end

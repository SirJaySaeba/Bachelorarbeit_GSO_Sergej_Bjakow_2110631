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
    Review.find(params[:id]).destroy
    flash[:success] = "Review entfernt"
    respond_to do |format|
      format.html { redirect_to root_path}
      format.json { head :no_content }
    end

  end
  
  private

    def correct_user
      @review = current_user.reviews.find_by_id(params[:id])
      redirect_to root_url if @review.nil?
    end
  
end

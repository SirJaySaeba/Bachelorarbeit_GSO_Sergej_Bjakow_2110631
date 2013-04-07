class GamerelationsController < ApplicationController
  before_filter :require_login

  def create
    @game = Game.find(params[:gamerelation][:followed_id])
    current_user.follow!(@game)
    respond_to do |format|
      format.html { redirect_to @game }
      format.js
    end
  end

  def destroy
    @game = Gamerelation.find(params[:id]).followed
    current_user.unfollow!(@game)    
    respond_to do |format|
      format.html { redirect_to @game }
      format.js
    end
  end
end

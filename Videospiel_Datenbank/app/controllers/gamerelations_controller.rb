class GamerelationsController < ApplicationController
  before_filter :require_login

  def create
    @game = Game.find(params[:gamerelation][:followed_id])
    current_user.follow!(@game)
    redirect_to @game
  end

  def destroy
    @game = Relationship.find(params[:id]).followed
    current_user.unfollow!(@game)
    redirect_to @game
  end
end

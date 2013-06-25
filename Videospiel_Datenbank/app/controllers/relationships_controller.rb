class RelationshipsController < ApplicationController
  
  before_filter :require_login

  def create
    @game = Game.find(params[:relationship][:owned_id])
    current_user.own_game!(@game)
    respond_to do |format|
      format.html { redirect_to @game }
      format.js
    end
  end

  def destroy
    @game = Relationship.find(params[:id]).owned
    current_user.discard_game!(@game)    
    respond_to do |format|
      format.html { redirect_to @game }
      format.js
    end
  end
end

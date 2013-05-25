class RatingsController < ApplicationController
  
  before_filter :require_login
 
  def create_and_update
    @game = Game.find_by_id(params[:game_id])

    if (current_user.ratings.find_by_game_id(@game.id) == nil)

      @rating = Rating.new(params[:rating])
      @rating.game_id = @game.id
      @rating.user_id = current_user.id
      
      if @rating.save
          respond_to do |format|
              format.html { redirect_to game_path(@game), :notice => "Your rating has been saved" }
              format.js
              #format.json { render :json => @average}
          end
      end
      
    else
      @rating = current_user.ratings.find_by_game_id(@game.id)

      if @rating.update_attributes(params[:rating])
          respond_to do |format|
              format.html { redirect_to game_path(@game), :notice => "Your rating has been updated" }
              format.js
              #format.json { render :json => @average}
          end
      end

    end
  end

  
=begin
    def create
        @game = Game.find_by_id(params[:game_id])
        @rating = Rating.new(params[:rating])
        @rating.game_id = @game.id
        @rating.user_id = current_user.id
        
        
        if @rating.save
            respond_to do |format|
                #format.html { redirect_to game_path(@game), :notice => "Your rating has been saved" }
                format.js
            end
        end
    end

    def update
        @game = Game.find_by_id(params[:game_id])
        @rating = current_user.ratings.find_by_game_id(@game.id)
        
        if @rating.update_attributes(params[:rating])
            respond_to do |format|
                #format.html { redirect_to game_path(@game), :notice => "Your rating has been updated" }
                format.js
            end
        end
    end
=end


end
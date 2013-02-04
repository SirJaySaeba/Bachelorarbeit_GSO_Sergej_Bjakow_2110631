module GamesHelper
  
  def link_to_create_game
    link_to "Neues Spiel eintragen", new_game_path
  end
  
  def link_to_edit_game
    link_to "bearbeiten", edit_game_path(@game) 
  end
  
  def link_to_gamelist
    link_to "Zur Liste", games_path
  end
  
  def link_to_detail
    link_to 'Show', @game
  end
  
  def rating_ballot
    if @rating = current_user.ratings.find_by_game_id(params[:id])
        @rating
    else
        current_user.ratings.new
    end
  end
  
  def current_user_rating
    if @rating = current_user.ratings.find_by_game_id(params[:id])
        @rating.value
    else
        "this shit sucks"
    end
  end
  
end

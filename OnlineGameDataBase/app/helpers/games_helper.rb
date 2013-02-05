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
  
  
end

module RatingsHelper
  
  def prep_user_rating
      if @rating = current_user.ratings.find_by_game_id(params[:id])
           @rating
      else
          current_user.ratings.new
      end
  end
  
  def current_user_rating
    @rating = current_user.ratings.find_by_game_id(params[:id])
     if @rating != nil
          @rating.value
     else
       "keine wertung"
     end
  end
  
end

module RatingsHelper
  
  def create_rating
    if @rating = current_user.ratings.find_by_game_id(params[:id])
        @rating
    else
        current_user.ratings.new
    end
  end
  
  def current_user_rating
    @rating = current_user.ratings.find_by_game_id(params[:id])
    
   # if (current_user.ratings.find_by_game_id(params[:id]).present? )
   #     @rating.value
   # else
   #     "no rating given yet"
   # end
   @rating.value
  end
  
end

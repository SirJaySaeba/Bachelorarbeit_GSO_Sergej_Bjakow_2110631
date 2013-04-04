class Game < ActiveRecord::Base
  
  #--------------Validations-----------#
  validates :title, presence: true
 
  #--------------Relations--------------#
  has_many :ratings
  has_many :raters, :through => :ratings, :source => :users
  
  has_many :reviews
  has_many :users, through: :reviews
  
  has_many :reverse_gamerelations, foreign_key: "followed_id",
                                   class_name:  "Gamerelation",
                                   dependent:   :destroy
  has_many :followers, through: :reverse_gamerelations, source: :follower   
   

  #-------------Methods----------#
  def self.search(search)
    if search
      find(:all, :conditions => ['title LIKE ?', "%#{search}%"])
      
    else
        flash[:error] = "nothing found"
    end    
  
  end

  def average_rating
    ratings.sum('value').to_f / ratings.count.to_f
    # ratings.average('value')   
  end
  
  def amount_ratings
    @total = self.ratings.size
  end
  
  def feed
    Review.where("user_id = ?", id)
    #Review.from_games_followed_by(self)
  end

end

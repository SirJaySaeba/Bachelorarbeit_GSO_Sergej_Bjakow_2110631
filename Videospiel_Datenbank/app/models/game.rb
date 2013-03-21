class Game < ActiveRecord::Base
  
  validates :title, presence: true
 
  #--------------Relations--------------#
    has_many :ratings
    has_many :raters, :through => :ratings, :source => :users
    has_many :reviews
 
  def self.search(search)
    if search
      find(:all, :conditions => ['title LIKE ?', "%#{search}%"])

    end
  end

  def average_rating
    ratings.sum('value').to_f / ratings.count.to_f
    # ratings.average('value')   
  end
  
  def amount_ratings
         @total = self.ratings.size
  end

end

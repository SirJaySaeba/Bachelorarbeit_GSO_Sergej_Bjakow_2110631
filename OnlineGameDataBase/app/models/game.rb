class Game < ActiveRecord::Base
  
  validates :title_german, presence: true
  validates :developer, presence: true  
  
  #belongs_to :user 
  
  has_and_belongs_to_many :profiles
  has_many :ratings
  has_many :raters, :through => :ratings, :source => :users


  def self.search(search)
    if search
      find(:all, :conditions => ['title_german LIKE ?', "%#{search}%"])
    else
      find(:all)
    end
  end

  def average_rating

    ratings.sum('value').to_f / ratings.count.to_f
    # wahrscheinlich geht es auch so:
    # ratings.average('value')
       
  end
  
  def amount_ratings
         @total = self.ratings.size

  end
  
end

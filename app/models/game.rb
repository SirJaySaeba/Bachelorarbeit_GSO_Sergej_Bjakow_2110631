class Game < ActiveRecord::Base

  #--------------Validations-----------#
  validates :title, presence: true, uniqueness: true
  
  has_attached_file :cover, :styles => { :resize => "200x200>" }#,
                  #:url  => "/assets/games/:id/:style/:basename.:extension",
                  #:path => ":rails_root/public/assets/games/:id/:style/:basename.:extension"
  #validates_attachment_presence :game
  #validates_attachment_size :game, :less_than => 500.kilobytes
  #validates_attachment_content_type :game, :content_type => ['image/jpeg', 'image/png']
 
  #--------------Relations--------------#
  has_many :ratings, dependent: :destroy
  has_many :raters, :through => :ratings, :source => :users
  
  has_many :reviews, dependent: :destroy
  has_many :authors, :through => :reviews, :source => :users
  
  has_many :relationships, foreign_key: "owned_id", dependent: :destroy
  has_many :owners, through: :relationships, source: :owner

  #-------------Methods----------#
=begin
  def self.search(search)
    if search
      find(:all, :conditions => ['title LIKE ?', "%#{search}%"])

    end    
  end
=end


  def self.search(search, page)
    paginate :per_page => 5, :page => page,
             :conditions => ['title like ?', "%#{search}%"],
             :order => 'title'
  end



  def indiziert?
    attribute ? 'Ja' : 'Nein'
  end

  def average_rating
    #ratings.sum('value').to_f / ratings.count.to_f
    ratings.average('value')  
  end
  
  def amount_ratings
    @total = self.ratings.size
  end
  
  def list_game_reviews
    #Review.where("game_id = ?", id)
    Review.where(game_id: id)
  end

end

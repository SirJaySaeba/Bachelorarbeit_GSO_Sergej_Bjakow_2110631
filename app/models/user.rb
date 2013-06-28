class User < ActiveRecord::Base
  attr_accessible :name, :email, :password, :password_confirmation
  has_secure_password

  before_save { |user| user.email = email.downcase }
  before_save :create_remember_token
  
  validates :name, presence: true, uniqueness: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /.+@.+/ 
  validates :email, presence:   true,
                    format:     { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 3 }
  validates :password_confirmation, presence: true
  
  
  #-----------Relations---------------#
  has_many :ratings, dependent: :destroy
  has_many :rated_games, :through => :ratings, :source => :games
  
  has_many :reviews, dependent: :destroy
  has_many :reviewed_games, :through => :reviews, :source => :games
  
  has_many :relationships, foreign_key: "owner_id", dependent: :destroy
  has_many :owned_games, through: :relationships, source: :owned

  #---------------Methods-----------------#
  def owning?(some_game)
    relationships.find_by_owned_id(some_game.id)
  end

  def own_game!(some_game)
    relationships.create!(owned_id: some_game.id)
  end

  def discard_game!(some_game)
    relationships.find_by_owned_id(some_game.id).destroy
  end
  
  def list_user_reviews
    #Review.where("user_id = ?", id)
    Review.where(user_id: id)
  end
  
  private

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end
  

end

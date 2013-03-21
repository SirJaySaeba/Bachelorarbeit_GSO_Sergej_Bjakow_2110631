class User < ActiveRecord::Base
  attr_accessible :name, :email, :password, :password_confirmation
  has_secure_password

  before_save { |user| user.email = email.downcase }
  before_save :create_remember_token
  
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence:   true,
                    format:     { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 3 }
  validates :password_confirmation, presence: true
  
  #-----------Relations---------------#
  has_many :ratings, dependent: :destroy
  has_many :rated_games, :through => :ratings, :source => :games
  has_many :reviews, dependent: :destroy
  
  private

  def create_remember_token
    self.remember_token = SecureRandom.urlsafe_base64
  end
end

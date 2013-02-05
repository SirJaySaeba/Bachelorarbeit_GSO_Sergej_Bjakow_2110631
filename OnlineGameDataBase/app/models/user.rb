class User < ActiveRecord::Base
  has_secure_password
  
  validates :email,
    format: /.+@.+/,
    uniqueness: true
    
  validates :username,
    uniqueness: true
    
  has_many :games
  has_many :ratings
  has_many :rated_games, :through => :ratings, :source => :games
end

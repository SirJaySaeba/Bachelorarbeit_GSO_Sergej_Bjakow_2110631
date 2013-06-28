class Review < ActiveRecord::Base
  attr_accessible :content
  
  belongs_to :user
  belongs_to :game
  
  validates :content, presence: true, length: { minimum: 5 } 
  validates :user_id, presence: true
  validates :game_id, presence: true
  
  default_scope order: 'reviews.created_at DESC'
end

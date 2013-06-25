class Relationship < ActiveRecord::Base
  
  attr_accessible :owned_id

  belongs_to :owner, class_name: "User"
  belongs_to :owned, class_name: "Game"
  

  
  validates :owner_id, presence: true
  validates :owned_id, presence: true
end

class Game < ActiveRecord::Base
  
  validates :title, presence: true
  
  def self.search(search)
    if search
      find(:all, :conditions => ['title LIKE ?', "%#{search}%"])

    end
  end

  
end

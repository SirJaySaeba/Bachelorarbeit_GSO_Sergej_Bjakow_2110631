class Game < ActiveRecord::Base
  
  validates :title_german, presence: true
  validates :developer, presence: true  
  

  def self.search(search)
    if search
      find(:all, :conditions => ['title_german LIKE ?', "%#{search}%"])
    else
      find(:all)
    end
  end


  
end

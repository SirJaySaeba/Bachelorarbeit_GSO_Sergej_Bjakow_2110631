class AddAttachmentCoverToGames < ActiveRecord::Migration
  def self.up
    change_table :games do |t|
      t.attachment :cover
    end
  end

  def self.down
    drop_attached_file :games, :cover
  end
end

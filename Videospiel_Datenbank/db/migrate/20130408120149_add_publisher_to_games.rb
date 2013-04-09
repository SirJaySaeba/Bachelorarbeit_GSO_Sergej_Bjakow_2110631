class AddPublisherToGames < ActiveRecord::Migration
  def change
    add_column :games, :publisher, :string

  end
end

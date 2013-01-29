class AddUntertitelToGames < ActiveRecord::Migration
  def change
    add_column :games, :untertitel, :string

  end
end

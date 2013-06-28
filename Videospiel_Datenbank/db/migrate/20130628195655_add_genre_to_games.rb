class AddGenreToGames < ActiveRecord::Migration
  def change
    add_column :games, :genre, :string
  end
end

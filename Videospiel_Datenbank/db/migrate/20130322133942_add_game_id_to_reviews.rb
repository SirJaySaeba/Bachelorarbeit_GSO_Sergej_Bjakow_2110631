class AddGameIdToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :game_id, :integer
    add_index  :reviews, :game_id
  end
end

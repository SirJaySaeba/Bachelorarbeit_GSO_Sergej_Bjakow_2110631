class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :value

      t.timestamps
    end
  end
end

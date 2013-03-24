class CreateGamerelations < ActiveRecord::Migration
  def change
    create_table :gamerelations do |t|
      t.integer :followed_id
      t.integer :follower_id

      t.timestamps
    end
    add_index :gamerelations, :followed_id
    add_index :gamerelations, :follower_id
    add_index :gamerelations, [:followed_id, :follower_id], unique: true
  end
end

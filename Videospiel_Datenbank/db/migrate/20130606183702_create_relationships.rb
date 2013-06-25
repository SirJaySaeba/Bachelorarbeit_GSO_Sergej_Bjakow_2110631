class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :owner_id
      t.integer :owned_id

      t.timestamps
    end

    add_index :relationships, :owner_id
    add_index :relationships, :owned_id
    add_index :relationships, [:owner_id, :owned_id], unique: true
  end
end

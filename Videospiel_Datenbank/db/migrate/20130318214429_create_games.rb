class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :developer
      t.date :release
      t.string :system

      t.timestamps
    end
  end
end

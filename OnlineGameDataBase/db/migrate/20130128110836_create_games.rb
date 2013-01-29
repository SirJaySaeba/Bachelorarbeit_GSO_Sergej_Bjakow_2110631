class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.binary :game_cover
      t.string :title_german
      t.string :title_original
      t.string :title_alternative
      t.string :developer
      t.string :publisher
      t.string :system
      t.date :release
      t.boolean :dlc
      t.boolean :dlc_addon
      t.float :rating

      t.timestamps
    end
  end
end

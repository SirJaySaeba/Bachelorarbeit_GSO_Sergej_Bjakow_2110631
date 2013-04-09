class AddMoreGameDataToGames < ActiveRecord::Migration
  def change
    add_column :games, :title_org, :string

    add_column :games, :subtitle, :string

    add_column :games, :subtitle_org, :string
    
    add_column :games, :usk, :integer

    add_column :games, :medium, :string

    add_column :games, :indizierung, :boolean

  end
end

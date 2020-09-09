class CreateMazes < ActiveRecord::Migration[6.0]
  def change
    create_table :mazes do |t|
      t.integer :difficulty
      t.float :time
      t.belongs_to :player

      t.timestamps
    end
  end
end

class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.string :name, null: false
      t.boolean :exclusive, default: false, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :shelves, :user_id
  end
end

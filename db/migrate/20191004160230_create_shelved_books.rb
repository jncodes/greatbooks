class CreateShelvedBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shelved_books do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :book_id, null: false
      t.timestamps
    end
    add_index :shelved_books, :user_id
    add_index :shelved_books, :book_id
  end
end

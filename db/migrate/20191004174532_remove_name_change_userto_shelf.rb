class RemoveNameChangeUsertoShelf < ActiveRecord::Migration[5.2]
  def change
    remove_column :shelved_books, :name
    rename_column :shelved_books, :user_id, :shelf_id
  end
end

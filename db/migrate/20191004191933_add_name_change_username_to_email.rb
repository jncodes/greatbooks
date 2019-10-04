class AddNameChangeUsernameToEmail < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string, null: false
    rename_column :users, :username, :email
  end
end

class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :review
      t.integer :user_id, null: false
      t.string :book_id, null: false
      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :book_id
  end
end

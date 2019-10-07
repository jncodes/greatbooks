class ShelvedBook < ApplicationRecord
    validates :book_id, :shelf_id, presence: true
    validates :book_id, uniqueness: { scope: :shelf_id }

    belongs_to :shelf
    has_many :reviews,
        foreign_key: :book_id,
        class_name: :Review
    
    has_many :users,
        through: :reviews,
        source: :user
end
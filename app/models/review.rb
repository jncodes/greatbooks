class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }
    validates :user_id, uniqueness: { scope: :book_id }

    belongs_to :user
    belongs_to :shelved_book,
        foreign_key: :book_id,
        class_name: :ShelvedBook
end
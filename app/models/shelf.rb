class Shelf < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
    has_many :shelved_books
end
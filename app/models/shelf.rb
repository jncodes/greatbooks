class Shelf < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
    has_many :shelved_books

    def self.default_shelves
    end

    def initialize(Shelf.default_shelves)
    end
end
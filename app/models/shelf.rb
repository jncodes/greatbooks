class Shelf < ApplicationRecord
    validates :name, presence: true

    belongs_to :user
    has_many :shelved_books

    def self.default_shelves(user)
        Shelf.create(name: 'READING', exclusive: true, user_id: user.id)
        Shelf.create(name: 'READ', exclusive: true, user_id: user.id)
        Shelf.create(name: 'TO READ', exclusive: true, user_id: user.id)
    end
end
# json.partial! "api/shelved_books/shelved_book", shelved_book: @shelved_book

json.shelved_book do
  json.partial! '/api/shelved_books/shelved_book', shelved_book: @shelved_book
  json.reviewIds @shelved_book.reviews.pluck(:id)
end
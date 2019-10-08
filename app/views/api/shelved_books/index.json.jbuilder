@shelved_books.each do |shelved_book|
  json.set! shelved_book.id do
    json.partial! 'shelved_book', shelved_book: shelved_book
    json.reviewIds []
  end
end
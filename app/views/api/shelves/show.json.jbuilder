# json.partial! "api/shelves/shelf", shelf: @shelf

json.shelf do
  json.partial! '/api/shelves/shelf', shelf: @shelf
#   json.shelvedBookIds @shelved_book.reviews.pluck(:id)
end
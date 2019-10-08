@shelves.each do |shelf|
  json.set! shelf.id do
    json.partial! 'shelf', shelf: shelf
    # json.shelvedBookIds []
  end
end
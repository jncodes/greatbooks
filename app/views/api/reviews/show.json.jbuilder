# json.partial! "api/reviews/review", review: @review

json.review do
  json.partial! '/api/reviews/review', review: @review
end
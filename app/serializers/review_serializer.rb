class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :reviewed_by, :user_review, :book_reviewed 

end
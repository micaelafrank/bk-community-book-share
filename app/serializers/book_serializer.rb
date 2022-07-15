class BookSerializer < ActiveModel::Serializer
  attributes :id, :allGenres, :title, :author, :booksAdmin, :description, :can_claim, :user, :reviews, :genre, :dropBoxAddress, :sold_by

  # belongs_to :user
  # has_many :reviews 
  # belongs_to :genre 
  
end

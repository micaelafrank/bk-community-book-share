class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :description, :can_claim

  belongs_to :user
  has_many :reviews 
  belongs_to :genre 
  
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :total_acquired_books, :tokens, :zip, :dropbox_id, :is_admin

  has_one :dropbox
  has_many :books 
  
end

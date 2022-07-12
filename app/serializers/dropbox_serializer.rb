class DropboxSerializer < ActiveModel::Serializer
  attributes :id, :address 
  
  has_many :users 
end

class Dropbox < ApplicationRecord
    has_many :users 
    has_many :books, through: :users
    
end

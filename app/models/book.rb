class Book < ApplicationRecord
    belongs_to :user 
    belongs_to :dropbox, through: :user 
    has_many :reviews 
    belongs_to :genre 
    
end

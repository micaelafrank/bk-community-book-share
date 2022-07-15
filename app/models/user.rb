class User < ApplicationRecord
    has_secure_password

    validates :password, confirmation: true, length: { minimum: 6 }
    validates :username, :name, presence: true 

    has_many :books 
    belongs_to :dropbox
end

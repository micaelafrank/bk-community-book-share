class User < ApplicationRecord
    has_secure_password
    
    validates :password, confirmation: true, length: { minimum: 6 }
    validates :username, :name, :email presence: true 
    validates :zip, presence: true, required: { one_of: [11238, 11216, 11213, 11225, 11215, 11217] }

    has_many :books 
    has_one :dropbox

end

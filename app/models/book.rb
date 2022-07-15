class Book < ApplicationRecord
    belongs_to :user 
    # has_one :dropbox, through: :user 
    has_many :reviews 
    belongs_to :genre 

    def sold_by
        seller = user.id
        User.find(seller).username
    end

    def allGenres
        bookGenre = genre.id
        Genre.find(bookGenre).genre
    end
    
    def dropBoxAddress
        db_address = user.dropbox_id 
        db = Dropbox.find(db_address)
        db.dropbox_location
    end

    def booksAdmin
        bookadmin = user.id
        User.find(bookadmin).is_admin
    end

end

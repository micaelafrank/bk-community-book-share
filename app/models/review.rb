class Review < ApplicationRecord
    belongs_to :book, dependent: :destroy 
    has_many :users 

    def reviewed_by
        user.username
    end

    def book_reviewed 
        title = Book.find_by(params[:title])
        book_reviewed = book.id 
        render json: book_reviewed
    end
end

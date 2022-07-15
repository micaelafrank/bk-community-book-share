class BooksController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :book_not_found
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def update
        book = Book.find(params[:id])
        book.update!(can_claim: params[:can_claim])
        render json: book, status: :ok 
    end

    def create 
        book = Book.create!(book_params)
        render json: book, status: :created    
    end

    private

    def book_not_found
        render json: [ error: "Sorry, but it looks like this book is not available!" ], status: :not_found
    end

    def book_invalid(invalid)
        render json: [errors: invalid.record.errors.full_messages], status: :unprocessable_entity
    end

    def authorize 
        return render json: [ error: "You must be a member to continue" ], status: :unauthorized unless session.include? :user_id
    end

    def book_params
        params.permit(:title, :author, :description, :genre_id, :user_id)
    end
end

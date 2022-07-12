class AdminAccessOnlyController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :check_membership 
    
    def update 
        book = Book.where(is_admin: true).includes(:user)
        book.update!(book_params)
        render json: book, status: :updated 
    end
    
    def destroy
        book = Book.find(params[:id])
        book.destroy 
        head :no_content 
    end
    
    private
    
    def check_membership
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def book_params
        params.permit(:title, :author, :description, :user_id, :genre_id)
    end

end

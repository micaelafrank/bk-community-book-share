class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :review_not_found 
rescue_from ActiveRecord::RecordInactive, with: :review_request_invalid
    
    before_action :authorize 

    def index 
        reviews = Review.all 
        render json: reviews
    end

    def show
        review = find_review 
        render json: review 
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created 
    end

    def update 
        review = find_review
        review.update!(review_params)
        render json: review, status: :updated
    end

    def destroy 
        review = find_review
        review.destroy 
        head :no_content 
    end

    private

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def review_params
        params.permit(:reviewed_by, :title, :user_review, :book_reviewed)
    end

    def review_not_found
        render json: { error: "Review not found" }, status: :not_found
    end

    def review_request_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_review
        Review.find(params[:id])
    end

end

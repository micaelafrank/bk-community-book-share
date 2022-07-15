class SessionsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_login
    skip_before_action :authorized, only: :create 

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end
    
    def destroy
        session.delete :user_id
        head :no_content
    end  
    
    private

    def invalid_login(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unauthorized    
    end
end


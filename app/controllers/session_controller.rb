class SessionController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_login
   
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
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


class UsersController < ApplicationController
wrap_parameters format: []
skip_before_action :authorized, only: [:create]
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
      users = User.all 
      render json: users 
    end

    def show
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      user = User.find(session[:user_id])
      render json: user, status: :ok
    end

    def create
      dropbox = Dropbox.find_by(zip: params[:zip])
      if dropbox
        user = User.create!(name: params[:name], username: params[:username], tokens: 3, total_acquired_books: 0, zip: params[:zip], dropbox_id: dropbox.id, is_admin: false, password: params[:password])
        if user
          session[:user_id] = user.id
        render json: user, status: :created
        end
      else
        render json: { message: "Invalid zip code"}
      end
    end

    private

    def render_unprocessable_entity(invalid)
      render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    # def user_params
    #   params.permit(:username, :password, :password_confirmation)
    # end
    
end

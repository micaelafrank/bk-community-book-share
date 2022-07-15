class GenresController < ApplicationController
    def give_all
        genres = Genre.all
        render json: genres
    end
end

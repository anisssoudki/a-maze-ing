class PlayersController < ApplicationController 


    def index 
       @player = Player.all
       render json: @player 
    end
end
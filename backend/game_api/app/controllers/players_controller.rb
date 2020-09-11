class PlayersController < ApplicationController 
    before_action :set_player, only: [:show, :edit, :update, :destroy]

    def index 
       @players = Player.all
       render json: @players
    end



    def show
        render json: @player
    end

    def create
        @player = Player.create(player_params)
        if @player.valid?
            render json: @player
        else
            render json: { errors: @player.errors.full_messages }, status: :unprocessable_entity
        end
    end



    private 

    def set_player
        @player = Player.find(params[:id])
    end

    def player_params
        params.require(:player).permit(:name)
    end


end
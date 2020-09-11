class MazesController < ApplicationController 
    def index 
      
        @mazes = Maze.all

        render json: @mazes
     end

     def show
        @maze = Maze.find(params[:id])
        render json: @maze
    end

    def create
        @maze = Maze.create(maze_params)
        if @maze.valid?
            render json: @maze
        else
            render json: { errors: @maze.errors.full_messages }, status: :unprocessable_entity
        end
    end


    private 

    def maze_params
        params.require(:maze).permit(:difficulty,:time,:player_id)
    end
end
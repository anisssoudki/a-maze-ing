class MazesController < ApplicationController 
    def index 
      
        @mazes = Maze.all

        render json: @mazes
     end

     def show
        @maze = Maze.find(params[:id])
        render json: @maze
    end
end
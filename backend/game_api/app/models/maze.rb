class Maze < ApplicationRecord

    before_save :default_values
  def default_values
    self.difficulty ||= 5 
    self.time = 60 

    # byebug
  end
    belongs_to :player
end

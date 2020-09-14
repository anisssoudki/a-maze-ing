class Maze < ApplicationRecord

    before_save :default_values
  def default_values
    self.difficulty ||= 5 
    

    # byebug
  end
    belongs_to :player
end

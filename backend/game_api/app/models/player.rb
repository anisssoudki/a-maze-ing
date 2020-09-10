class Player < ApplicationRecord
    has_many :mazes

    validates_uniqueness_of :name
end

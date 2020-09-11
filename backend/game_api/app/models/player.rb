class Player < ApplicationRecord
    has_many :mazes, dependent: :destroy

    validates_uniqueness_of :name
end

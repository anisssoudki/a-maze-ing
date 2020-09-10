class MazeSerializer < ActiveModel::Serializer
  attributes :id, :difficulty, :time, :player_id
  belongs_to :player
end

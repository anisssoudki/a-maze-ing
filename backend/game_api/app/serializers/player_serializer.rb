class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :mazes
end

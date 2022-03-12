class Question < ApplicationRecord
  validates :content, presence: true
end

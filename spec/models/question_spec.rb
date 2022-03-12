require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'バリデーション' do
    subject { question.valid? }

    let(:text) { 'てすと' }
    let(:question) { described_class.new(content: text) }

    it { expect(subject).to eq(true) }
    
    context 'contentがnilの場合' do
      let(:text) { nil }
      it { expect(subject).to eq(false) }
    end
  end
end

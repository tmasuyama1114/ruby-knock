require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'validation' do
    subject { question.valid? }

    let(:text) { 'てすと' }
    let(:question) { described_class.new(content: text) }

    it { expect(subject).to eq(true) }

    context 'when the content is nil' do
      let(:text) { nil }

      it { expect(subject).to eq(false) }
    end
  end
end

require "rails_helper"

RSpec.describe Apartment, type: :model do

    it "validates street" do
        apartment = Apartment.create
        expect(apartment.errors[:street]).to_not be_empty
    end
    it "validates city" do
        apartment = Apartment.create
        expect(apartment.errors[:city]).to_not be_empty
    end
    it "validates state" do
        apartment = Apartment.create
        expect(apartment.errors[:state]).to_not be_empty
    end
    it "validates manager" do
        apartment = Apartment.create
        expect(apartment.errors[:manager]).to_not be_empty
    end
    it "validates email" do
        apartment = Apartment.create
        expect(apartment.errors[:email]).to_not be_empty
    end
    it "validates price" do
        apartment = Apartment.create
        expect(apartment.errors[:price]).to_not be_empty
    end
    it "validates bedrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bedrooms]).to_not be_empty
    end
    it "validates bathrooms" do
        apartment = Apartment.create
        expect(apartment.errors[:bathrooms]).to_not be_empty
    end
    it "validates pets" do
        apartment = Apartment.create
        expect(apartment.errors[:pets]).to_not be_empty
    end
    it "validates image" do
        apartment = Apartment.create
        expect(apartment.errors[:image]).to_not be_empty
    end
    it "validates user_id" do
        apartment = Apartment.create
        expect(apartment.errors[:user_id]).to_not be_empty
    end

end

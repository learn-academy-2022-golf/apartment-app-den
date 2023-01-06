require "rails_helper"

RSpec.describe "Apartments", type: :request do

    it "doesn't create an apartment without a street" do
        apartment_params = {
          apartment: {
            city: "Little Whinging",
            state: "Surrey",
            manager: "Mr. Potter",
            email: "potter@example.com",
            price: 2000,
            bedrooms: 3,
            bathrooms: 2,
            pets: "yes",
            image: "https://c8.alamy.com/comp/B0RJGE/small-bungalow-home-with-pathway-in-addlestone-surrey-uk-B0RJGE.jpg"
          }
        }
        post '/apartments', params: apartment_params
        expect(response.status).to eq 422
        json = JSON.parse(response.body)
        expect(json['street']).to include "can't be blank"
    end

end

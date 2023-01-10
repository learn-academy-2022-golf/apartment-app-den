require "rails_helper"

RSpec.describe "Apartments", type: :request do

    describe "GET /index" do

        it "gets a list of aparments" do

          user = User.create(email: "test@example.com", password: "password", password_confirmation: "password")

          user.apartments.create(
            street: 'Clean street',
            city: 'nice city',
            state: 'nice state',
            manager: 'Mr. Manager',
            email: 'manager@help.com',
            price: "$2.33",
            bedrooms: 3,
            bathrooms: 3,
            pets: "yes",
            image: "www.imageurl.com"
          )

          get "/apartments"

          apartment = JSON.parse(response.body)
    
          expect(response).to have_http_status(200)
          expect(apartment.length).to eq 1
        end
    
      end

end

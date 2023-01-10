class ApartmentsController < ApplicationController

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create

        apartment = Apartment.create(apartment_params)

        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status:422
        end
    end
    
    # Handle strong parameters, so we are secure
    private
    def apartment_params
        params.require(:apartment).permit(:user_id, :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image)
    end
end


import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const ApartmentNew = ( { createApartment }) => {

  const navigate = useNavigate()

  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createApartment(newApartment)
    console.log(newApartment)
    navigate("/apartmentindex")
  }

  return (
    <>
      <Form>
        <FormGroup>
            <Label for="street">
              Street
            </Label>

            <Input
              street="street"
              onChange={handleChange}
              placeholder="What is the apartment's street?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="city">
              City
            </Label>

            <Input
              name="city"
              onChange={handleChange}
              placeholder="What is the apartment's city?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="state">
              State
            </Label>
            <Input
              name="state"
              onChange={handleChange}
              placeholder="What state is the apartment in?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="Manager">
              Manager
            </Label>

            <Input
              name="Manager"
              onChange={handleChange}
              placeholder="Who is the apartment's manager?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">
              E-mail
            </Label>
            <Input
              name="email"
              onChange={handleChange}
              placeholder="What is the contact e-mail?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="price">
              Apartment Price
            </Label>
            <Input
              name="price"
              onChange={handleChange}
              placeholder="Price of apartment"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="Bedrooms">
              Number of Bedrooms
            </Label>

            <Input
              name="Bedrooms"
              onChange={handleChange}
              placeholder="Number of bedrooms"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="bathrooms">
              Number of bathrooms
            </Label>

            <Input
              name="bathrooms"
              onChange={handleChange}
              placeholder="Number of bathrooms"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="pets">
              pets
            </Label>

            <Input
              name="pets"
              onChange={handleChange}
              placeholder="Pets?"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="image">
              Apartment Image
            </Label>
            <Input
              name="image"
              onChange={handleChange}
              placeholder="Share your image"
              type="url"
            />
          </FormGroup>

          <Button onClick={handleSubmit}>
            Submit
          </Button>
            
        </Form>
    </>
  )
}

export default ApartmentNew

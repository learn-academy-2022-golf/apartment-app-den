
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom"

const ApartmentNew = () => {

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
    setNewApartment(newApartment)
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
            <Label for="manager">
              Manager
            </Label>

            <Input
              name="manager"
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
              Price
            </Label>
            <Input
              name="price"
              onChange={handleChange}
              placeholder="Price"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="bedrooms">
              Bedrooms
            </Label>

            <Input
              name="bedrooms"
              onChange={handleChange}
              placeholder="Bedrooms"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="bathrooms">
              Bathrooms
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
              Pets
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
              Image
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

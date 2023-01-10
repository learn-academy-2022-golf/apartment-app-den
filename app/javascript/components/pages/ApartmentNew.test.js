import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import { BrowserRouter } from 'react-router-dom'

describe("<ApartmentNew />", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew/>
      </BrowserRouter>
    )
  })

  it("Has a form with correct labels ", () => {
    const formStreet = screen.getByText("Street")
    expect(formStreet.getAttribute("for")).toEqual("street")

    const formCity = screen.getByText("City")
    expect(formCity.getAttribute("For")).toEqual("city")

    const formState = screen.getByText("State")
    expect(formState.getAttribute("For")).toEqual("state")

    const formManager = screen.getByText("Manager")
    expect(formManager.getAttribute("For")).toEqual("manager")

    const formEmail = screen.getByText("E-mail")
    expect(formEmail.getAttribute("For")).toEqual("email")

    const formPrice = screen.getByText("Price")
    expect(formPrice.getAttribute("For")).toEqual("price")

    const formBedrooms = screen.getByText("Bedrooms")
    expect(formBedrooms.getAttribute("For")).toEqual("bedrooms")

    const formBathrooms = screen.getByText("Bathrooms")
    expect(formBathrooms.getAttribute("For")).toEqual("bathrooms")

    const formPets = screen.getByText("Pets")
    expect(formPets.getAttribute("For")).toEqual("pets")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("For")).toEqual("image")
    
  })
})

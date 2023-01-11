import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex />, div)
  })

  it("contains link to show page", () => {

    render(
      <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
    )

    const formShow = screen.getByText("Show")

    // expect(formShow.getAttribute("href")).toEqual("/apartmentshow")


  })
  
})

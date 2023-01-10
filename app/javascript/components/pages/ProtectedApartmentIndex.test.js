import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import Navigation from "../components/Navigation"
import userEvent from "@testing-library/user-event"

describe("<ProtectedApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
  })
  it("has functional navigation links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
    userEvent.click(screen.getByText("All Apartments"))
    expect(screen.getByText("All Apartments")).toBeInTheDocument()
   })
})
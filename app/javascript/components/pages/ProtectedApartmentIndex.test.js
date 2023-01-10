import React from "react"
import { render } from "@testing-library/react"
import ProtectedApartmentIndex from "./ProtectedApartmentIndex"

describe("<ProtectedApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
  })
  
})

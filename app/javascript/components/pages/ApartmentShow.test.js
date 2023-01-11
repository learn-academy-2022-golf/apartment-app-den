import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, NavLink, Routes, Route } from "react-router-dom"

const renderComponent = (Apartments) => {

  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
          <Route path="apartmentshow/:id" element={<ApartmentShow apartments={Apartments} />}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("<ApartmentShow />", () => {

  it("renders a card for each Apartment", (Apartments) => {

    render(
      <ApartmentShow apartments={Apartments} />
    );

    Apartments.map((apartment) => {
      const nameElement = screen.getByText(apartment.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
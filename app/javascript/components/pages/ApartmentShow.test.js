import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentShow from "./ApartmentShow";
import { MemoryRouter, NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import mockApartments from "../mockApartments"
import userEvent from "@testing-library/user-event";

const thisApartment = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route
          path="apartmentshow/:id"
          element={<ApartmentShow apartments={mockApartments} />}
        />
      </Routes>
    </MemoryRouter>
  );
};

describe("<ApartmentShow />", () => {
  it("has functioning navigation links", () => {
    thisApartment()
  });
});

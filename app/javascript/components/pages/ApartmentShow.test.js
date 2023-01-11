import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentShow from "./ApartmentShow";
import { BrowserRouter } from "react-router-dom";

describe("<ApartmentShow />", () => {
  it("renders without crashing", (apartments) => {
    const div = document.createElement("div");
    render(<ApartmentShow apartments={apartments} />, div);
  });

  it("contains link to show page", (apartments) => {
    render(
      <BrowserRouter>
        <ApartmentShow apartments={apartments} />
      </BrowserRouter>
    );
  });
});

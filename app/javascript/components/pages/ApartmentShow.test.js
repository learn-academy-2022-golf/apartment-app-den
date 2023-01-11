import React from "react";
import { render, screen } from "@testing-library/react";
import ApartmentShow from "./ApartmentShow";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import userEvent from "@testing-library/user-event";

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<ApartmentShow />, div);
  });
  it("has good nav links", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    userEvent.click(screen.getByText("All Apartments"));
    expect(screen.getByText("All Apartments")).toBeInTheDocument();
  });
});

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

// -------------------------------------------

// const renderComponent = (Apartments) => {

//   render(
//     <MemoryRouter initialEntries={["/apartmentshow/1"]}>
//       <Routes>
//           <Route path="apartmentshow/:id" element={<ApartmentShow apartments={Apartments} />}/>
//       </Routes>
//     </MemoryRouter>
//   )
// }

// describe("<ApartmentShow />", () => {

//   it("renders a card for each Apartment", (Apartments) => {

//     render(
//       <ApartmentShow apartments={Apartments} />
//     );

//     Apartments.map((apartment) => {
//       const nameElement = screen.getByText(apartment.name);
//       expect(nameElement).toBeInTheDocument();
//     });
//   });
// });

import React from "react";
import { useParams } from "react-router-dom";
import {
  CardBody,
  Button,
  Card,
  CardTitle,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams();
  const currentApartment = apartments?.find(
    (apartment) => apartment.id === +id
  );
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={currentApartment?.image} />

        <CardBody>
          <CardTitle tag="h5">Price: ${currentApartment?.price}</CardTitle>
          <CardText>
            <div>
              <h3>Address</h3>

              <p>street: {currentApartment?.street}</p>
              <p>city: {currentApartment?.city}</p>
              <p>state: {currentApartment?.state}</p>
            </div>
          </CardText>
        </CardBody>

        <ListGroup flush>
          <ListGroupItem>
            <p>Bedrooms: {currentApartment?.bedrooms}</p>
            <p>Bathrooms: {currentApartment?.bathrooms}</p>
          </ListGroupItem>
          <ListGroupItem>Pets?: {currentApartment?.pets}</ListGroupItem>
          <ListGroupItem>Manager: {currentApartment?.manager}</ListGroupItem>
        </ListGroup>

        <CardBody>
          <NavLink to={`/apartmentupdate/${currentApartment?.id}`}>
            <Button>Update</Button>
          </NavLink>
          <Button>Contact</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ApartmentShow;

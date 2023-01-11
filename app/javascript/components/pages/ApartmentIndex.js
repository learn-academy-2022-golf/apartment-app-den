import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

import { NavLink } from "react-router-dom";

const ApartmentIndex = ({ apartments }) => {
  return (
    <div>
      {apartments?.map((apartments, index) => {
        return (
          <>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Card" src={apartments.image} />
              <CardBody>
                <CardTitle tag="h5">Price: ${apartments.price}</CardTitle>
                <CardText>
                  {apartments.street}
                  {apartments.city}
                  {apartments.state}
                </CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>Bedrooms: {apartments.bedrooms}</ListGroupItem>
                <ListGroupItem>Bathrooms: {apartments.bathrooms}</ListGroupItem>
                <ListGroupItem>Pets Allowed?: {apartments.pets}</ListGroupItem>
              </ListGroup>
              <CardBody>
                <NavLink to={`/apartmentshow/${apartments.id}`}>
                  <Button>Show</Button></NavLink>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ApartmentIndex;

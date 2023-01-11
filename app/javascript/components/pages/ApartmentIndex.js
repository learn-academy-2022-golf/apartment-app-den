import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardLink,
  Button,
} from "reactstrap";

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
                  Street: {apartments.street}
                  <br />
                  City: {apartments.city}
                  <br />
                  State: {apartments.state}
                </CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>Bedrooms: {apartments.bedrooms}</ListGroupItem>
                <ListGroupItem>Bathrooms: {apartments.bathrooms}</ListGroupItem>
                <ListGroupItem>Pets Allowed?: {apartments.pets}</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href="/apartmentshow">View</CardLink>
                <CardLink href="#">Contact</CardLink>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ApartmentIndex;

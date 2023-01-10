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

const ProtectedApartmentIndex = ({ apartments, current_user }) => {

    const current_apartments = apartments?.filter((apartments)=>{
        return apartments.user_id === current_user.id
    })
  return (
    <div>
      {current_apartments?.map((apartments, index) => {
         
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
                <CardLink href="#">View</CardLink>
                <CardLink href="#">Contact</CardLink>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ProtectedApartmentIndex;

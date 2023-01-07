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

const ApartmentIndex = ({ mockApartments }) => {
  return (
    <div>
      {mockApartments?.map((apartments, index) => {
        return (
          <>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">Card Title</CardTitle>
                <CardText>This is some text within a card body.</CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>Price:{mockApartments.price}</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>And a third item</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Card Link</CardLink>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default ApartmentIndex;

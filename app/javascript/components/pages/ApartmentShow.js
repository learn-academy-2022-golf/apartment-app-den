import React from "react"

import { useParams } from "react-router-dom"

import {
  CardBody,
  Button,
  Card,
  CardTitle,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem
} from "reactstrap"

import { NavLink } from "react-router-dom";

const ApartmentShow = ( { apartments } ) => {

  const { id } = useParams();

  const apartment = apartments?.find((apartment) => apartment.id === +id);

  return (<div>
    
          <Card
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={ apartment.image }
      />

      <CardBody>
        <CardTitle tag="h5">
          Price:{ apartment.price }
        </CardTitle>
        <CardText>
          This is some text within a card body.
        </CardText>
      </CardBody>

      <ListGroup flush>
        <ListGroupItem>
          An item
        </ListGroupItem>
        <ListGroupItem>
          A second item
        </ListGroupItem>
        <ListGroupItem>
          And a third item
        </ListGroupItem>
      </ListGroup>

      <CardBody>

      <NavLink to={`/apartmentupdate/${apartment.id}`}>
                  <Button>Update</Button></NavLink>

      </CardBody>
    </Card>
  </div>)
}

export default ApartmentShow

import React from "react"
import { NavLink } from "reactstrap"

const Home = (props) => {

  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = props;

  if (logged_in === true) {
    return (
      <>
        <h3>Welcome to Den Apartments</h3>
        <p>An extensive list of Apartments to meet the needs of rental seekers alike.</p>
        <button>
          <a href="/apartmentindex">
            My Listings
          </a>
        </button>
        <button>
          <a href="/apartmentindex">
            View Listings
          </a>
        </button>
      </>
    )
  } else {
    return (
      <>
        <h3>Welcome to Den Apartments</h3>
        <p>An extensive list of Apartments to meet the needs of rental seekers alike.</p>
      </>
    )
  }

}

export default Home


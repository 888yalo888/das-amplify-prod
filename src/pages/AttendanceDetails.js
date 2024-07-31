//TODO Show check in and check out times along with vibes at each
//TODO add on click function back in amplify studio for youthpickedup to route to /attendance-details/:youthID


import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function AttendanceDetails() {
  const { youthID } = useParams();

  return (
    <>
    
    <h1>Checkout</h1>
    <Link to="/">
      <button>Go Back to Check In</button>
    </Link>  
    </>
    )
}

export default AttendanceDetails
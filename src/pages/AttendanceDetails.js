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
import React from 'react'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
    <>
    <h1>Checkout</h1>
    <Link to="/check-in">
      <button>Go Back to Check In</button>
    </Link>  
    </>
    )
}

export default CheckOut
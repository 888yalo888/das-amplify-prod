import React from 'react'
import { Link } from 'react-router-dom'

function Roster() {
  return (
    <>
    <h1>Roster</h1>
    <Link to="/check-in">
      <button>Go Back to Check In</button>
    </Link>  
    </>
    )
}
export default Roster
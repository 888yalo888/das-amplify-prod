import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


function YouthDetails() {
  const { youthID } = useParams();

  return (
    <>
    <h1>Youth Details</h1>
    <Link to="/">
      <button>Go Back to Check In</button>
    </Link>  
    </>
    )
}
export default YouthDetails
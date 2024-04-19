import React from 'react'
import { Link } from 'react-router-dom'
import Youths from '../ui-components/Youths'

function CheckIn() {
  return (
    <>
    <h1>CheckIn</h1>
    <Youths/>
    <Link to="/vibe-check">
      <button>Go to Vibe check</button>
    </Link>  <br/>
    <Link to="/check-out">
      <button>Go to check out</button>
    </Link>  <br/>
    <Link to="/youth-details">
      <button>Go to Youth Details</button>
    </Link>  <br/>
    <Link to="/roster">
      <button>Go to roster</button>
    </Link>  
    </>
    )
}
export default CheckIn
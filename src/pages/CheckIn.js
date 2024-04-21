import React from 'react';
import { ButtonCheckIn,Youths, VibeSummary} from '../ui-components'
import { Link } from 'react-router-dom'


const CheckIn = () => {

  function getCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 20px' }}>
        <Link to="/roster" style={{ textDecoration: 'none'}}>
          <ButtonCheckIn >
            ButtonCheckIn
          </ButtonCheckIn>
        </Link>
        <div style={{ fontFamily: 'var(--amplify-fonts-default-variable)', fontSize: '2em', fontWeight:'bold' }}>
          {getCurrentDate()}
        </div>        <div>
          <VibeSummary />
        </div>
      </div>
      <div>
        <Youths />
      </div>
    </div>
  );
};

export default CheckIn;

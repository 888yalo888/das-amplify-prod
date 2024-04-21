import React from 'react';
import { ButtonRoster} from '../ui-components'
import { Link } from 'react-router-dom'


const Roster = () => {


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 20px' }}>
          <ButtonRoster>
            ButtonCheckIn
          </ButtonRoster>
      <div>
          {/* inster add youth button */}
        </div>
      </div>
      <div>
        {/* insert roster component */}
      </div>
    </div>
  );
};

export default Roster;

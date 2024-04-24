import React from 'react';
import { ButtonRoster, RosterCollection, RosterTableHeader, AddYouthButton} from '../ui-components'
import { Link } from 'react-router-dom'
import AddYouth from '../components/AddYouth'
import UpdateYouth from '../components/UpdateYouth'


const Roster = () => {


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px",
        }}
      >
          <Link to="/check-in" style={{ textDecoration: "none"}}>
            <ButtonRoster overrides={{ ButtonRoster: { display: "flex-start" }}}></ButtonRoster>
          </Link>
          <AddYouth></AddYouth>
      </div>
      <div style={{ margin: '10px 20px' }}>
          <RosterTableHeader overrides= {{
            RosterTableHeader: { width: '100%' } }}></RosterTableHeader>
          <RosterCollection
          overrideItems={({ item, index }) => ({
            status: item.status === "ACTIVE" ? "Active" : "Inactive",
            width: "100%",
            onClick: () => {
              <UpdateYouth></UpdateYouth>
            }
          })}></RosterCollection>
      </div>
    </div>
  );
};

export default Roster;
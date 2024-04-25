import React from 'react';
import { ButtonRoster } from '../ui-components';
import { Link } from 'react-router-dom';
import AddYouth from '../components/AddYouth';
import UpdateYouth from '../components/UpdateYouth';
import useStore from '../store/store';
import { getSite } from '../services/api.service';
import SortArrow from '../assets/down-arrow.svg';
import { gradeMapper } from '../utils/text';
import '../styles/RosterTable.css';
import { EntityStatus } from '../enums/entity-status.enum';


const Roster = () => {
  const store = useStore();
  const [site, setSite] = React.useState(store.currentSite);

  React.useEffect(() => {
    const fetchSiteData = async () => {
      const data = await getSite(store?.currentSite?.id, false);
      setSite(data);
    };
    if (store.currentSite?.id) {
      fetchSiteData();
    }
  }, [store.currentSite?.id]);

  const RosterTable = () => {
    const ActiveBadge = ({status}) => {
      console.log('status', status);
      if (status === EntityStatus.Active) {
        return (<span className="custom-badge active-badge">Active</span>);
      }
      return (<span className="custom-badge inactive-badge">Inactive</span>)
    }
    const RosterRows = () => {
      return site?.roster?.map((youth) => (
        <tr key={youth.id}>
          <td className='table-data'>{youth?.fullName}</td>
          <td className='table-data'>{youth?.dateOfBirth}</td>
          <td className='table-data'>{youth?.guardianFullName}</td>
          <td className='table-data'>{youth?.guardianPhoneNumber}</td>
          <td className='table-data'>{gradeMapper(youth?.grade)}</td>
          <td className='table-data'>{youth?.gender}</td>
          <td className='table-data'>
            <ActiveBadge status={youth?.status}></ActiveBadge>
          </td>
          <td className='table-data' style={{maxWidth: '30px'}}>
            <UpdateYouth youth={youth}></UpdateYouth>
          </td>
        </tr>
      ));
    };
    return (
      <table className='roster-table'>
        <thead>
          <tr>
            <th className='table-data'>Name</th>
            <th className='table-data'>Date of Birth</th>
            <th className='table-data'>Guardian Name</th>
            <th className='table-data'>Guardian Phone</th>
            <th className='table-data'>Grade</th>
            <th className='table-data'>Gender</th>
            <th className='table-data'>Status</th>
            <th className='table-data'></th>
          </tr>
        </thead>
        <tbody>
          <RosterRows></RosterRows>
        </tbody>
      </table>
    )
  };

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
        <RosterTable></RosterTable>
      </div>
    </div>
  );
};

export default Roster;
import React from 'react';
import { Link } from 'react-router-dom';
import AddYouth from '../components/AddYouth';
import UpdateYouth from '../components/UpdateYouth';
import useStore from '../store/store';
import { getSite } from '../services/api.service';
import SortArrow from '../assets/down-arrow.svg';
import { gradeMapper } from '../utils/text';
import '../styles/RosterTable.css';
import { EntityStatus } from '../enums/entity-status.enum';
import { ButtonRoster } from '../ui-components';


const Roster = () => {
  const store = useStore();
  const [site, setSite] = React.useState();
  const [sortedSite, setSortedSite] = React.useState();
  const [sortField, setSortField] = React.useState('fullName');
  const [sortAsc, setSortAsc] = React.useState(true);

  const fetchSiteData = async () => {
    const data = await getSite(store?.currentSite?.id, false);
    setSite(data);
  };
  React.useEffect(() => {
    if (store.currentSite?.id) {
      fetchSiteData();
    }
  }, [store.currentSite?.id]);

  React.useEffect(() => {
    if (site) {
      sortRoster();
    }
  }, [site, sortAsc, sortField])

  function onHeaderClick(field) {
    // Only sort on full name for now
    if (field !== 'fullName') return;
    if (field === sortField) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field)
      setSortAsc(true);
    }
  }

  function sortRoster() {
    const siteCopy = JSON.parse(JSON.stringify(site));
    const sortedRoster = siteCopy?.roster.toSorted((a, b) => {
      let comparison = 0;
      const aField = a[sortField]?.toUpperCase();
      const bField = b[sortField]?.toUpperCase();
      if (aField > bField) {
        comparison = 1;
      } else if (aField < bField) {
        comparison = -1;
      }
      return sortAsc ? comparison : comparison * -1;
    });
    siteCopy.roster = sortedRoster;
    setSortedSite(siteCopy);
  }

  const RosterTable = () => {
    const ActiveBadge = ({status}) => {
      if (status === EntityStatus.Active) {
        return (<span className="custom-badge active-badge">Active</span>);
      }
      return (<span className="custom-badge inactive-badge">Inactive</span>)
    }
    const RosterRows = () => {
      return sortedSite?.roster?.map((youth) => (
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
            <UpdateYouth youth={youth} refreshData={fetchSiteData}></UpdateYouth>
          </td>
        </tr>
      ));
    };
    return (
      <table className='roster-table'>
        <thead>
          <tr>
            <th className='table-data' onClick={() => onHeaderClick('fullName')}>
              Name
              <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'fullName' ? SortArrow : ''} />
            </th>
            <th className='table-data' onClick={() => onHeaderClick('dateOfBirth')}>
              Date of Birth
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'dateOfBirth' ? SortArrow : ''} /> */}
            </th>
            <th className='table-data' onClick={() => onHeaderClick('guardianName')}>
              Guardian Name
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'guardianName' ? SortArrow : ''} /> */}
            </th>
            <th className='table-data' onClick={() => onHeaderClick('guardianPhone')}>
              Guardian Phone
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'guardianPhone' ? SortArrow : ''} /> */}
            </th>
            <th className='table-data' onClick={() => onHeaderClick('grade')}>
              Grade
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'grade' ? SortArrow : ''} /> */}
            </th>
            <th className='table-data' onClick={() => onHeaderClick('gender')}>
              Gender
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'gender' ? SortArrow : ''} /> */}
            </th>
            <th className='table-data' onClick={() => onHeaderClick('status')}>
              Status
              {/* <img className={sortAsc ? 'sort-asc' : ''} src={sortField === 'status' ? SortArrow : ''} /> */}
            </th>
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
          <Link
          to="/check-in"
          style={{
            textDecoration: "none",
          }}
        >
          <ButtonRoster
            style={{
              width: "auto",
              minWidth: "190px",
              maxWidth: "225px",
              padding: 0,
            }}
          >
            ButtonCheckIn
          </ButtonRoster>
        </Link>
          <AddYouth refreshData={fetchSiteData}></AddYouth>
      </div>
      <div style={{ margin: '10px 20px' }}>
        <RosterTable></RosterTable>
      </div>
    </div>
  );
};

export default Roster;
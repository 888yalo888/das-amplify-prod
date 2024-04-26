import React from 'react';
import { ButtonRoster } from '../ui-components';
import { Link } from 'react-router-dom';
import AddYouth from '../components/AddYouth';
import UpdateYouth from '../components/UpdateYouth';
import useStore from '../store/store';
import { getSite } from '../services/api.service';
// import SortArrow from '../assets/down-arrow.svg';
import { gradeMapper } from '../utils/text';
import '../styles/RosterTable.css';
import { EntityStatus } from '../enums/entity-status.enum';
import { useMediaQuery } from "react-responsive";


const Roster = () => {
  const store = useStore();
  const [site, setSite] = React.useState();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1020px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const fetchSiteData = async () => {
    const data = await getSite(store?.currentSite?.id, false);
    setSite(data);
  };
  React.useEffect(() => {
    if (store.currentSite?.id) {
      fetchSiteData();
    }
  }, [store.currentSite?.id]);

  const RosterTable = () => {
    const ActiveBadge = ({ status }) => {
      if (status === EntityStatus.Active) {
        return <span className="custom-badge active-badge">Active</span>;
      }
      return <span className="custom-badge inactive-badge">Inactive</span>;
    };
  
    const RosterRows = () => {
      return site?.roster?.map((youth) => (
        <tr key={youth.id}>
          <td className="table-data" style={{ minWidth: "200px" }}>{youth?.fullName}</td>
          <td className="table-data" style={{ minWidth: "120px" }}>{youth?.dateOfBirth}</td>
          {!isTabletOrMobile && (
            <>
              <td className="table-data">{youth?.guardianFullName}</td>
              <td className="table-data">{youth?.guardianPhoneNumber}</td>
            </>
          )}
          <td className="table-data" style={{ minWidth: "90px" }}>{gradeMapper(youth?.grade)}</td>
          <td className="table-data" style={{ minWidth: "70px" }}>{youth?.gender}</td>
          {!isTabletOrMobile && (
            <td className="table-data">
              <ActiveBadge status={youth?.status}></ActiveBadge>
            </td>
          )}
          <td className="table-data" style={{ maxWidth: "50px",minWidth:"40px" }}>
            <UpdateYouth youth={youth} refreshData={fetchSiteData}></UpdateYouth>
          </td>
        </tr>
      ));
    };
  
    return (
      <table className="roster-table">
        <thead>
          <tr>
            <th className="table-data">Name</th>
            <th className="table-data">Date of Birth</th>
            {!isTabletOrMobile && (
              <>
                <th className="table-data">Guardian Name</th>
                <th className="table-data">Guardian Phone</th>
              </>
            )}
            <th className="table-data">Grade</th>
            <th className="table-data">Gender</th>
            {!isTabletOrMobile && <th className="table-data">Status</th>}
            <th className="table-data"></th>
          </tr>
        </thead>
        <tbody>
          <RosterRows></RosterRows>
        </tbody>
      </table>
    );
  };  

  return (
    <div style={{ overflowX: "auto" }}>

    <div>
      <div
        style={{
          display: "flex",
          justifyContent: isSmallMobile? "center" :"space-between",
          margin: "10px 20px",
          flexDirection: isSmallMobile ? "column" : "row"
        }}
      >
          <Link to="/check-in" style={{ textDecoration: "none"}}>
            <ButtonRoster overrides={{ ButtonRoster: { justifyContent: isSmallMobile ? "center":"flex-start" }}}></ButtonRoster>
          </Link>
          <AddYouth overrides={{Button:{ width: '225px'} }} refreshData={fetchSiteData}></AddYouth>
      </div>
      <div style={{ margin: '10px 20px',overflow:"auto" }}>
        <RosterTable></RosterTable>
      </div>
    </div>
    </div>

  );};

export default Roster;
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CheckInList from './pages/CheckInList';
import SiteManagement from './pages/SiteManagement';
import YouthDetails from './pages/YouthDetails';
import UserLogin from './pages/UserLogin';
import YouthRoster from './pages/YouthRoster';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/checkin-list">Check In List</Link>
            </li>
            <li>
              <Link to="/roster">Roster</Link>
            </li>
            <li>
              <Link to="/site-management">Site Management</Link>
            </li>
            <li>
              <Link to="/youth-details">Youth Details</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component={UserLogin} />
          <Route path="/checkin-list" component={CheckInList} />
          <Route path="/roster" component={YouthRoster} />
          <Route path="/site-management" component={SiteManagement} />
          <Route path="/youth-details" component={YouthDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
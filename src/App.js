import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
import VibeCheck from './pages/VibeCheck';
import YouthDetails from './pages/YouthDetails';
import Roster from './pages/Roster';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import PMHeader from './ui-components/PMHeader';
import CheckedOutDetails from './pages/AttendanceDetails';
import SiteSelection from './pages/SiteSelection';

Amplify.configure(config);

const App = ({ signOut, user }) => {

  return (
    <>
      <PMHeader width="100%" />
      {/* <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button> <br /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/site-selection" />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/check-out/:youthID" element={<CheckOut />} />
          <Route
            path="/attendance-details/:youthID"
            element={<CheckedOutDetails />}
          />
          <Route path="/roster" element={<Roster />} />
          <Route path="/vibe-check/:youthID" element={<VibeCheck />} />
          <Route path="/youth-details/:youthID" element={<YouthDetails />} />
          <Route path="/site-selection" element={<SiteSelection user={user} />} />
        </Routes>
      </Router>
    </>
  );
};

export default withAuthenticator(App);

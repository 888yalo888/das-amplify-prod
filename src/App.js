import { withAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
import VibeCheck from './pages/VibeCheck';
import YouthDetails from './pages/YouthDetails';
import Roster from './pages/Roster';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { PMHeader } from "./ui-components";

Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <>
      <PMHeader width="100%" />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button> <br/>
      <Router>
        <Routes>
          <Route path="/" element={<CheckIn/>}/>
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/vibe-check" element={<VibeCheck />} />
          <Route path="/youth-details" element={<YouthDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default withAuthenticator(App);

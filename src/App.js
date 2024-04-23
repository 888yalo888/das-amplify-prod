import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import CheckOut from "./pages/CheckOut";
import VibeCheck from "./pages/VibeCheck";
import YouthDetails from "./pages/YouthDetails";
import Roster from "./pages/Roster";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { PMHeader } from "./ui-components";
import CheckedOutDetails from "./pages/AttendanceDetails";
import DASNAuthenticator from "./pages/DASNAuthenticator";
import { useAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(config);

const App = () => {
  const { signOut, user, authStatus } = useAuthenticator(
    ({ signOut, user, authStatus }) => [signOut, user, authStatus]
  );

  return (
    <DASNAuthenticator>
      <PMHeader width="100%" />
      <button onClick={signOut}>Sign out</button>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/check-in" />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/check-out/:youthID" element={<CheckOut />} />
          <Route
            path="/attendance-details/:youthID"
            element={<CheckedOutDetails />}
          />
          <Route path="/roster" element={<Roster />} />
          <Route path="/vibe-check/:youthID" element={<VibeCheck />} />
          <Route path="/youth-details/:youthID" element={<YouthDetails />} />
        </Routes>
      </Router>
    </DASNAuthenticator>
  );
};

export default App;

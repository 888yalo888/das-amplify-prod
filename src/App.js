import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import CheckOut from "./pages/CheckOut";
import VibeCheck from "./pages/VibeCheck";
import YouthDetails from "./pages/YouthDetails";
import Roster from "./pages/Roster";
import "@aws-amplify/ui-react/styles.css";
import 'react-tooltip/dist/react-tooltip.css'
import "./App.css";
import { Amplify } from "aws-amplify";
import { Hub } from 'aws-amplify/utils';
import config from "./amplifyconfiguration.json";
import CheckedOutDetails from "./pages/AttendanceDetails";
import DASNAuthenticator from "./pages/DASNAuthenticator";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Header from "./pages/Header";
import SiteSelection from "./pages/SiteSelection";

Amplify.configure(config);

const App = () => {
  const { signOut, user, authStatus } = useAuthenticator(
    ({ signOut, user, authStatus }) => [signOut, user, authStatus]
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authStatus == 'unauthenticated') {
      navigate("/login");
    }
    Hub.listen('auth', (data) => {
      if (data?.payload?.event === 'signedIn') {
        navigate("/site-selection");
      } else if (data?.payload?.event === 'signedOut') {
        navigate("/login");
      }
    });
  }, []);

  const Login = () => {}

  return (
    <DASNAuthenticator>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate replace to="/site-selection" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/check-out/:youthID" element={<CheckOut />} />
        <Route
          path="/attendance-details/:youthID"
          element={<CheckedOutDetails />}
        />
        <Route path="/roster" element={<Roster />} />
        <Route path="/vibe-check/:youthID" element={<VibeCheck />} />
        <Route path="/youth-details/:youthID" element={<YouthDetails />} />
        <Route
          path="/site-selection"
          element={<SiteSelection user={user} />}
        />
      </Routes>
    </DASNAuthenticator>
  );
};

export default App;

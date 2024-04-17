import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CheckInList from './pages/CheckInList';
import SiteManagement from './pages/SiteManagement';
import YouthDetails from './pages/YouthDetails';
import UserLogin from './pages/UserLogin';
import YouthRoster from './pages/YouthRoster';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserLogin} />
        <Route path="/roster" component={YouthRoster} />
        <Route path="/checkin-list" component={CheckInList} />
        <Route path="/site-management" component={SiteManagement} />
        <Route path="/youth-details" component={YouthDetails} />
      </Switch>
    </Router>
  );
}

export default App;

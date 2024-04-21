import { PMHeader, RosterTableBodyCollection, RosterTableHeader} from './ui-components'

function App() {
  return (
   <>
    <PMHeader width="100%" />
    <RosterTableHeader/>
    <RosterTableBodyCollection></RosterTableBodyCollection>
   </>
  );
}

export default App;
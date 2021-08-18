import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./components/common/common.scss";

import Search from "./container/screen/Search";
import PatientEntries from "./container/screen/PatientEntries";
import Layout from "./components/Layout/Layout";
import AddPatient from "./container/screen/AddPatient";
import AddEntry from "./container/screen/AddEntry";
import EntryDetails from "./container/screen/EntryDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/search" />
        </Route>
        <Route path="/patient/add">
          <AddPatient />
        </Route>
        <Route path="/patient/:patientId/entries" exact>
          <PatientEntries />
        </Route>
        <Route path="/patient/:patientId/entries/add" exact>
          <AddEntry  />
        </Route>
        <Route path="/patient/:patientId/entries/:entryId/details" exact>
          <EntryDetails />
        </Route>
        <Route path="/history">

        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

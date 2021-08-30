import { Switch, Route, Redirect } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";

import Search from "./container/screen/Search";
import PatientEntries from "./container/screen/PatientEntries";
import Layout from "./components/Layout/Layout";
import AddPatient from "./container/screen/AddPatient";
import AddEntry from "./container/screen/AddEntry";
import EntryDetails from "./container/screen/EntryDetails";

import { BrowserView, MobileView } from "react-device-detect";
import SearchMobile from "./container/mobile/SearchMobile";
import PatientDetails from "./container/mobile/PatientDetails";
import EntryDetailMobile from "./container/mobile/EntryDetails";

function App() {
  return (
    <Fragment>
      <BrowserView>
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
              <AddEntry />
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
      </BrowserView>
      <MobileView>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <SearchMobile />
            </Route>
            <Route path="/patient/:patientId/entries" exact>
              <PatientDetails />
            </Route>
            <Route path="/patient/:patientId/entries/:entryId/quick-access" exact>
              <PatientDetails />
            </Route>
            <Route path="/patient/:patientId/entries/:entryId/details" exact>
              <EntryDetailMobile />
            </Route>
          </Switch>
        </Layout>
      </MobileView>
    </Fragment>

  );
}

export default App;

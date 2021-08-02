import SearchCard from "./SearchCard";
import classes from "./SearchResults.module.scss";

import { Fragment } from 'react';
import AddBar from "../Patient/AddBar";
import SearchResultTotal from "./SearchResultTotal";

const SearchResults = (props) => {
  const matchSearchNumber = props.data.length;
  const patientSearchResults = props.data;

  return (
    <Fragment>
      <SearchResultTotal total={matchSearchNumber} searchInput={props.searchKeyword}/>
      <div className={classes["results-wrapper"]}>
        {patientSearchResults.map((p) => (
          <SearchCard
            key={p.id}
            name={p.patientName}
            dob={p.patientDob}
            phoneNumber={p.patientPhoneNo}
            mostReccentExaminationDate={p.patientLastCheckUp}
            numberOfEntries={p.patientNoEntries}
            gender={p.gender}
          />
        ))}
      </div>
      <AddBar />
    </Fragment>

  );
};

export default SearchResults;

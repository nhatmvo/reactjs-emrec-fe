import PatientSearchResultCard from "./PatientSearchResultCard";
import "./PatientSearchResults.scss";

const PatientSearchResults = (props) => {
  const patientSearchResults = props.results;

  return (
    <div className="results-wrapper">
      {patientSearchResults.map((p) => (
        <PatientSearchResultCard
          className="card"
          name={p.patientName}
          dob={p.patientDob}
          phoneNumber={p.patientPhoneNo}
          mostReccentExaminationDate={p.patientLastCheckUp}
          numberOfEntries={p.patientNoEntries}
        />
      ))}
    </div>
  );
};

export default PatientSearchResults;

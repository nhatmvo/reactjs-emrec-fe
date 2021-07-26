import PatientSearchResultCard from "./PatientSearchResultCard";
import  "./PatientSearchResults.scss";

const PatientSearchResults = (props) => {
    const patientSearchResults = props.results;

    return (
        <div className="results-wrapper">
            { patientSearchResults.map(p => <PatientSearchResultCard
                className="card"
                name={p.name} 
                dob={p.dateOfBirth} 
                phoneNumber={p.phoneNumber} 
                mostReccentExaminationDate={p.mostReccentExaminationDate}
                numberOfEntries={p.numberOfEntries}/>) }
        </div>
    )
}

export default PatientSearchResults;
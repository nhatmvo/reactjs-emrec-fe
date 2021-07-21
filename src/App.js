import './App.css';
import PatientSearchResults from './components/Patient/PatientSearchResults';

function App() {
  const mockData = [
    {
      name: "Võ Minh Nhật",
      dateOfBirth: "1997",
      phoneNumber: "0344145250",
      mostReccentExaminationDate: "01/10/2021",
      numberOfEntries: 2
    },
    {
      name: "Cù Khôi Nguyên",
      dateOfBirth: "1997",
      phoneNumber: "0932832483",
      mostReccentExaminationDate: "10/05/2020",
      numberOfEntries: 1
    },
    {
      name: "Luyện Thị Yên",
      dateOfBirth: "1997",
      phoneNumber: "0388696963",
      mostReccentExaminationDate: "12/03/2019",
      numberOfEntries: 3
    }
  ]

  return (
    <div>
      <PatientSearchResults results={mockData} />
    </div>
  );
}

export default App;

import './App.css';
import Information from './Components/Information'
import AddMeeting from './Components/AddMeeting'
import SelectBuilding from './Components/SelectBuilding';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Information />} />
          <Route path="/add" element={<AddMeeting />} />
          <Route path="/building" element={<SelectBuilding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

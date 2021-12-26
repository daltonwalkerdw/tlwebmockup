
import './Styles/FrontPage.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AnnBar from "./Components/AnnBar"

function App() {
  return (
    <div className="App">
      <AnnBar />
      <div className="hero">
        <h1>ThreatLocker</h1>
        <h2>Add Zero Trust Policy-Driven Security to Your Endpoints</h2>
      </div>
    </div>
  );
}

export default App;

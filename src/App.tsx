import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FunctionComponent } from "react";
import Exercise from "./exercise/Exercise";
import ExerciseGrid from "./exerciseGrid/ExerciseGrid";
import LoginScreen from "./authentication/LoginScreen";

const Placeholder: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Witamy w Codegarden. Baw się dobrze.</p>
        <Link className="App-link" to="/login">
          Zaloguj się
        </Link>
      </header>
    </div>
  );
};

const App: FunctionComponent = () => {
  document.body.classList.add("overflow-x-hidden");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Placeholder />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/exercises" element={<ExerciseGrid />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

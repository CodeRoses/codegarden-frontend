import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FunctionComponent } from "react";
import Exercise from "./exercise/Exercise";
import ExerciseGrid from "./exerciseGrid/ExerciseGrid";
import Login from "./authentication/Login";

const Placeholder: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Witamy w Codegarden. Baw się dobrze.</p>
        <Link className="App-link" to="/exercises">
          Wybierz zadanie
        </Link>
      </header>
      <Login />
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;

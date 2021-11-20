import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FunctionComponent } from "react";
import Exercise from "./exercise/Exercise";

const Placeholder: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Witamy w Codegarden. Baw się dobrze.</p>
        <a
          className="App-link"
          href="https://www.python.org/doc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Python
        </a>
      </header>
    </div>
  );
};

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/exercise">Exercise</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Placeholder />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

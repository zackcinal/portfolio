import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";

function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setCurrentPage(path);
    navigate(path);
  };

  return (
    <div>
      <nav>
        <Link to="/" onClick={() => handleNavigation("/")}>
          Home
        </Link>
        <p className="line">|</p>
        <Link to="/Personal" onClick={() => handleNavigation("/Personal")}>
          Personal
        </Link>
        <p className="line">|</p>
        <Link
          to="/Professional"
          onClick={() => handleNavigation("/Professional")}
        >
          Work
        </Link>
      </nav>
      <img className="logo" src="https://i.imgur.com/RgDmhxH.png" alt="logo" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="hello">
              <h1 className="i-am-zack">Hello! This is Zack.</h1>
              <h2 className="se">I am a software engineer...</h2>
            </div>
          }
        />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Professional" element={<Professional />} />
      </Routes>
    </div>
  );
}

export default App;

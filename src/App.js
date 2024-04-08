import "./App.css";
import "ldrs/ring";
import Lottie from "lottie-react";
import ReactSwitch from "react-switch";
import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";
import Gradient from "./Animations/Gradient.json";
import React, { useState, useEffect, createContext } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export const ThemeContext = React.createContext(null);

function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const handleNavigation = (path) => {
    setCurrentPage(path);
    navigate(path);
  };

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data fetched successfully!" });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div>
          <nav>
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="nav-a"
            >
              Home <br />
            </Link>
            <p className="line">|</p>
            <Link
              to="/Personal"
              onClick={() => handleNavigation("/Personal")}
              className="nav-a"
            >
              Personal
            </Link>
            <p className="line">|</p>
            <Link
              to="/Professional"
              onClick={() => handleNavigation("/Professional")}
              className="nav-a"
            >
              Work
            </Link>
          </nav>
          <div className="switch">
              <label>{theme === "light" ? "Light" : "Dark"}</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
        </div>
        <img
          className="logo"
          src="https://i.imgur.com/l9yyv9e.png"
          alt="logo"
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="hello">
                <h1 className="i-am-zack">Hello! This is Zack.</h1>
                <h2 className="se">I am a software engineer...</h2>
                <Lottie
                  animationData={Gradient}
                  className="lottie"
                  loop={true}
                />
              </div>
            }
          />
          <Route path="/Personal" element={<Personal />} />
          <Route path="/Professional" element={<Professional />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import "./App.css";
import "ldrs/ring";
import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar/Navbar.jsx";
import Landing from "./Pages/Landing/Landing.jsx";

export const ThemeContext = React.createContext(null);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data fetched successfully!" });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <div className="App" id={theme}>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Personal" element={<Personal />} />
            <Route path="/Professional" element={<Professional />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

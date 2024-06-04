import "./navbar.css";
import ReactSwitch from "react-switch";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ThemeContext = React.createContext(null);

function Navbar() {
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
    <nav id={theme}>
      <img className="logo" src="https://i.imgur.com/l9yyv9e.png" alt="logo" />
      <div className="links">
        <Link to="/" onClick={() => handleNavigation("/")} className="nav-a">
          Home
        </Link>
        <Link
          to="/Personal"
          onClick={() => handleNavigation("/Personal")}
          className="nav-a"
        >
          Personal
        </Link>
        <Link
          to="/Professional"
          onClick={() => handleNavigation("/Professional")}
          className="nav-a"
        >
          Work
        </Link>
      </div>
      <div className="switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          uncheckedIcon={"☀️"}
          checkedIcon={"🌙"}
          offColor={'#f2eded'}
          onColor={'#000'}
          boxShadow="5px 5px 5px 5px 5px black"
        />
      </div>
    </nav>
    </ThemeContext.Provider>
  );
}

export default Navbar;

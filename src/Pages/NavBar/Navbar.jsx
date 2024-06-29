import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("/");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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
    <nav>
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
    </nav>
  );
}

export default Navbar;

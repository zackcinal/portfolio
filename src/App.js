import Personal from "./Pages/Personal";
import Professional from "./Pages/Professional";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import 'ldrs/ring'
import Lottie from "lottie-react";
import Gradient from './Animations/Gradient.json'


function App() {
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
    <div>
      <nav>
        <Link to="/" onClick={() => handleNavigation("/")}>
          Home <br/>
          <span className="∩">∴</span>
        </Link>
        <p className="line">|</p>
        <Link to="/Personal" onClick={() => handleNavigation("/Personal")}>
          Personal
          <span className="∩">∴</span>
        </Link>
        <p className="line">|</p>
        <Link
          to="/Professional"
          onClick={() => handleNavigation("/Professional")}
        >
          Work
          <span className="∩">∴</span>
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
              <Lottie animationData={Gradient} className="lottie" loop={true}/>
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

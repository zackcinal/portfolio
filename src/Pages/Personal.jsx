import "./personal.css";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import GradientForInsta from "../Animations/GradientForInsta.json";

export const ThemeContext = React.createContext(null);

function Personal() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateParallax = (depth) => {
    return -scrollY * depth;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="personal" id={theme}>
        <div className="personal-container">
          <div className="whoami">
            <div className="whoami-2">
              <h1 className="intro">
                I'm Zack, a software engineer based in New York City🗽
              </h1>
              <p className="about-me">
                Thriving in collaborative environments, I leverage my software
                engineering skills to craft user-friendly websites that deliver
                clear value and exceptional user experiences. My constant drive
                for improvement keeps me learning and pushing boundaries.
              </p>
            </div>
            <img
              src="https://i.imgur.com/GnLacTv.jpeg"
              alt="My picture"
              className="img-me"
              style={{ transform: `translateY(${calculateParallax(0.3)}px)` }}
            />
          </div>
        </div>
        <div className="photos-container">
          <div
            className="williamsburg-img"
            style={{ transform: `translateY(${calculateParallax(0.5)}px)` }}
          >
            <img
              src="https://i.imgur.com/4aQJrSE.jpeg"
              alt="williamsburg"
              className="img-william"
            />
            <h4 className="travel-info">Traveling</h4>
            <p className="travel-info">
              Travel has always been a strong pull for me. I seize every chance
              to explore new destinations, because while you can always earn a
              living, these windows of opportunity can be fleeting. he
              excitement of encountering something unseen is what drives me,
              wherever the destination. I've been fortunate to experience both
              Europe and the United States, with Prague and Arizona leaving a
              lasting impression on me.
            </p>
          </div>
          <div className="photography-text">
            <div className="text-content">
              <h3>What do I do besides coding?</h3>
              <h4>I like photography...</h4>
              <p className="about-photography">
                I've loved photography since I was young, but it truly came
                alive for me when I moved to New York City. I began by capturing
                the city's architecture, but on vacations, I found myself drawn
                to nature photography.
              </p>
              <p className="instagram-link">
                <Lottie
                  animationData={GradientForInsta}
                  className="lottieInsta"
                  loop={true}
                />
                <a
                  href="https://www.instagram.com/zackcinal/"
                  target="_blank"
                  className="instagram-linking"
                >
                  <p className="see-more-insta">
                    See More on Instagram <br /> @zackcinal
                  </p>
                </a>
              </p>
            </div>
            <div className="traveling-container">
              <div
                style={{ transform: `translateY(${calculateParallax(0.7)}px)` }}
              >
                <img
                  src="https://i.imgur.com/9cyBtIY_d.webp?maxwidth=1520&fidelity=grand"
                  className="travel-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Personal;

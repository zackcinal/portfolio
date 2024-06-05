import "./landing.css";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";
import '../Loading/loading.css';

const TEXTS = [
  " Software Engineer 💻",
  " Formula 1 Fan🏎️",
  " Photographer📷",
  " Traveller✈️",
];

function Landing() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index => index + 1), 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={`loading-screen ${loading ? "" : "hidden"}`}>
        <div className="logo-container">
          <img src="https://i.imgur.com/tOysSFo.png" alt="Logo" className="Logo" />
          <div class="loader"></div>
        </div>
      </div>
      <div className={`landing-container ${loading ? "hidden" : ""}`}>
        <div className="hello">
          <h1 className="i-am-zack">Hello! This is Zack.</h1>
          <h2 className="sliding-text">
            I am a{" "}
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h2>
        </div>
        <div className="my-image-container">
          <img
            src="https://i.imgur.com/SeqWo0e.jpeg"
            alt="me"
            className="my-image"
          />
        </div>
      </div>
      <div className="works">
        <Works />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;

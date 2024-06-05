import "./landing.css";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Works from "../Works/Works";
import Footer from "../Footer/Footer";

const TEXTS = [
  " Software Engineer 💻",
  " Formula 1 Fan🏎️",
  " Photographer📷",
  " Traveller✈️",
];

function Landing() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <div className="landing-container">
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
            src="https://i.imgur.com/CMGSMo6.jpg"
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

import React from "react";
import "./personal.css";

function Personal() {
  return (
    <div className="personal">
      <div className="personal-container">
        <div className="whoami">
          <h1 className="intro">
            I'm Zack, a software engineer based in New York🗽
          </h1>
          <p className="about-me">
            My passion for web development fuels my drive as a software
            engineer. I thrive in environments where I can utilize my technical
            expertise to create user-friendly websites that deliver tangible
            value and contribute to a positive user experience.
          </p>
          <p className="about-me">
            I like watching movies and F1, traveling and photography.
          </p>
        </div>
      </div>
      <div className="photos-container">
        <h3>Photography📷</h3>
        <div className="photo">
          <img
            src="https://i.imgur.com/4aQJrSE.jpeg"
            alt="photo"
            className="sample-img1"
            title="Williamsburg, NY"
          />
          <img
            src="https://i.imgur.com/CvJTx0L.jpg"
            alt="photo"
            className="sample-img2"
            title="Empire States Building"
          />
          <img
            src="https://i.imgur.com/8oMAPxv.jpg"
            alt="photo"
            className="sample-img3"
            title="Horseshoe Bend, AZ"
          />
          <p className="instagram-link">
            <a href="https://www.instagram.com/zackcinal/" target="_blank">
              See More on Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="travel">
          <h3 className="travel-header">Traveling🧳</h3>
        <div className="usa-map">
          <p className="travel-p">
            I'm a passionate traveler, exploration is my fuel. While you can
            always earn more money, unique experiences often have a limited
            window. That's why I prioritize exploring new places. I've been
            fortunate to travel across Europe and the US, soaking in the charm
            of Prague, the vibrant food scene of Miami, and the majestic
            landscapes of Arizona. Now, I have my sights set on experiencing the
            natural wonders of Hawaii and Alaska. Next stop, bucket list!
          </p>
          <div className="maps">
            <img className="usa-map-img" src="https://i.imgur.com/aykRblH.png" alt="usa-map" />
            <img className="eu-map-img" src="https://i.imgur.com/AqEhv9j.png" alt="eu-map" />
          </div>
        </div>
      </div>
      <div className="movies">
        <h3 className="movies-header">Movies🍿</h3>
        <div className="movies-in">
          Check my Letterboxd <a href="https://letterboxd.com/zackcinal/lists/" className="letterboxd" target="_blank">profile</a> to see my lists!
        </div>
      </div>
      {/* <footer>
        <div>
          <p>Follow me:</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Personal;

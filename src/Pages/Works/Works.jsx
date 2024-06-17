import React, { useEffect, useRef } from "react";
import "./works.css";

function Works() {
  const workContainersRef = useRef([]);
  const worksSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    workContainersRef.current.forEach((container) => {
      if (container) {
        observer.observe(container);
      }
    });

    return () => {
      if (workContainersRef.current) {
        workContainersRef.current.forEach((container) => {
          if (container) {
            observer.unobserve(container);
          }
        });
      }
    };
  }, []);

  const scrollToWorks = () => {
    worksSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="works-container" ref={worksSectionRef}>
      <h1 className="works-header" onClick={scrollToWorks}>
        Works
      </h1>
      <div
        className="work-cont"
        ref={(el) => (workContainersRef.current[0] = el)}
      >
        <div className="works-0">
          <h1>Pet Care by Kubra</h1>
          <div className="explanation">
            <div className="left-side">
              <p>
                Pet Care by Kubra is a website for dog walking services where
                customers can sign up, add their dogs to the database, make new
                walking reservations, and view their bookings.
              </p>
              <h5 className="cards">Built with React, Python & PostgreSQL</h5>
              <div className="links">
                <a
                  href="https://github.com/zackcinal/dogwalksbykubra-frontend"
                  target="_blank"
                >
                  Go to GitHub🔒
                </a>
                <a href="https://petcarebykubra.com/" target="_blank">
                  Go to Website
                </a>
              </div>
            </div>
            <div className="images-div">
              <img
                src="https://i.imgur.com/G9hTvR2.png"
                className="petcare-image"
              />
              {/* <img
                src="https://i.imgur.com/gcG6CWC.png"
                className="petcare-image2"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="work-cont"
        ref={(el) => (workContainersRef.current[1] = el)}
      >
        <div className="works-1">
          <h1>code.Pal</h1>
          <div className="explanation">
            <div className="left-side">
              <p>
                code.Pal serves as a hub for both developers seeking
                opportunities and companies looking to hire skilled
                professionals.
              </p>
              <h5 className="cards">Built with React, Python & PostgreSQL</h5>
              <div className="links">
                <a
                  href="https://github.com/zackcinal/codepal-backend"
                  target="_blank"
                >
                  Go to GitHub
                </a>
                <a
                  href="https://dev--jovial-macaron-61c636.netlify.app"
                  target="_blank"
                >
                  Go to Website
                </a>
              </div>
            </div>
            <img
              src="https://i.imgur.com/jotM7iE.png"
              className="codepal-img"
            />
          </div>
        </div>
      </div>
      <div
        className="work-cont"
        ref={(el) => (workContainersRef.current[2] = el)}
      >
        <div className="works-2">
          <h1>The Real Reel</h1>
          <div className="explanation">
            <img
              src="https://i.imgur.com/37EBWQ7.png"
              className="real-reel-img"
            />
            <div className="left-side">
              <p>
                The Real Reel is a social website where you can find your
                favorite movies and review them. You can also connect and follow
                other users.
              </p>
              <h5 className="cards">Built with React & MongoDB</h5>
              <div className="links">
                <a
                  href="https://github.com/ambretate/the-real-reel-front-end"
                  target="_blank"
                >
                  Go to GitHub
                </a>
                <a
                  href="https://therealreel.netlify.app"
                  className="real-reel-link"
                  target="_blank"
                >
                  Go to Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="work-cont"
        ref={(el) => (workContainersRef.current[3] = el)}
      >
        <div className="works-3">
          <h1>Accio Knowledge</h1>
          <div className="explanation">
            <div className="left-side">
              <p>
                Accio Knowledge is a website about Harry Potter. You can find
                all characters and spells in "Go to Hogwarts!" tab. In the
                "Books & Movies" tab you can explore every book and movie about
                Harry Potter.
              </p>
              <h5 className="cards">Built with React</h5>
              <div className="links">
                <a
                  href="https://github.com/zackcinal/accio-knowledge-project/tree/main"
                  target="_blank"
                >
                  Go to GitHub
                </a>
                <a
                  href="https://main--accioknowledge.netlify.app/"
                  className="accio-link"
                  target="_blank"
                >
                  Go to Website
                </a>
              </div>
            </div>
            <img src="https://i.imgur.com/oZ3RCpB.png" className="accio-img" />
          </div>
        </div>
      </div>
      <div
        className="work-cont"
        ref={(el) => (workContainersRef.current[4] = el)}
      >
        <div className="works-4">
          <h1>Modern Family API</h1>
          <div className="explanation">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Modern_Family-Logo.svg/2560px-Modern_Family-Logo.svg.png"
              className="modern-family-img"
            />
            <div className="left-side">
              <p>
                Ever wanted to know who said that iconic line, "Fizbo is judging
                you!" or relive the Pritchett-Dunphy-Tucker clan's hilarious
                moments through code? Well, look no further! This API is your
                one-stop shop for everything Modern Family, for now focusing on
                the characters and seasons that make this show so beloved.
              </p>
              <h5 className="cards">Built with MongoDB and Node.js</h5>
              <div className="links">
                <a
                  href="https://github.com/zackcinal/modern-family-api"
                  target="_blank"
                >
                  Go to GitHub
                </a>
                <a
                  href="https://modernfamilyapi-078e7c797411.herokuapp.com"
                  className="accio-link"
                  target="_blank"
                >
                  Go to Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

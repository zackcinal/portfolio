import React from "react";
import "./prof.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Resume from "./Resume";
import Projects from "./Projects";
import Lottie from "lottie-react";
import Gradient from "../Animations/Gradient.json";

function Professional() {
  return (
    <div className="main-prof">
      <div className="picture">
        <img src="https://i.imgur.com/7TvofFD.jpeg" className="img-of-me" />
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <p>
                Contact
              </p>
                <span className="∩1">∴</span>
            </Tab>
            <Tab>
              <p>
                Projects
              </p>
                <span className="∩1">∴</span>
            </Tab>
          </TabList>
          <TabPanel>
            <div>
              <Resume />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <Projects />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Professional;

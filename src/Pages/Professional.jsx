import "./prof.css";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const ThemeContext = React.createContext(null);

function Professional() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="main-prof" id={theme}>
        <div className="picture">
          <img src="https://i.imgur.com/7TvofFD.jpeg" className="img-of-me" />
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>
                <p>Contact</p>
              </Tab>
              <Tab>
                <p>Projects</p>
              </Tab>
              <Tab>
                <p>Skills</p>
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
            <TabPanel>
              <div>
                <Skills />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Professional;

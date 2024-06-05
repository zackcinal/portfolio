import "./prof.css";
import Resume from "./Resume";
import Skills from "./Skills";
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
          <h1 className="lets-work-together">Let's Work Together!</h1>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>
                <p>Contact</p>
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

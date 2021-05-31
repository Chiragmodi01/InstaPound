import React from "react";
import "../index.css";
import { Switch }from '@material-ui/core';

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      theme = darkTheme;
    }
  };

  return (
    <div style={{display:"flex", alignItems:"center"}}>
    <Switch
    className={theme === "dark" ? clickedClass : ""}
    id="darkMode"
    color="secondary"
    onClick={(e) => switchTheme(e)}/>
    </div>
  );
};

export default DarkMode;
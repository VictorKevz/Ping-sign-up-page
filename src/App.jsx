import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import lightIcon from "./assets/images/light-mode.svg";
import darkIcon from "./assets/images/dark-mode.svg";



function App() {
  const[isDark,setDark] = useState(false)

  const toggleTheme = ()=>{
    setDark(!isDark)
  }
  return (
    <main className={`outer-container ${isDark ? "body-bg-dark" : ""}`}>
      <div className="inner-container">
        <Hero isDark={isDark} />
        <Footer isDark={isDark}/>
        
      </div>
      <div className="dark-mode-container" onClick={toggleTheme}>
            <p className="dark-mode-text">{isDark ? "Light Mode":"Dark Mode"}</p>
            <img
              src={isDark ? lightIcon : darkIcon}
              alt={`${isDark ? "light Icon" : "dark Icon"}`}
             
            />
          </div>
    </main>
  );
}

export default App;

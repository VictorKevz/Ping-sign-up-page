import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Hero />
        <Footer/>
      </div>
    </main>
  );
}

export default App;

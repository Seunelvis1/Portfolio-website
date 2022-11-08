import React, { createContext, useState } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Serv from "./components/Serv/Serv";
import Testimonial from "./components/Testimonials/Testimonial";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

export const ThemeContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} />
        <Nav />
        <About />
        <Experience />
        <Serv />
        <Portfolio />
        <Testimonial />
        <Contacts />

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

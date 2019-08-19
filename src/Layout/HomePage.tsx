import React from 'react';
import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import Experiments from "../components/Experiments";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


// import css 
import  "../styles/homePage.css";


const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Products />
      <Experiments />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage; 


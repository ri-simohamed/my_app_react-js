import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

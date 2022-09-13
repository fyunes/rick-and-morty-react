import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Table from "./components/Table";
import NotFound from "./components/NotFound";
import Rickandmortyfetch from "./components/Rickandmortyfetch";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
          <Route path="/rickandmorty" element={<Rickandmortyfetch />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
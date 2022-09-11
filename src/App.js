import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Rickandmortyfetch from "./components/Rickandmortyfetch";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">   
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/rickandmorty" element={<Rickandmortyfetch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
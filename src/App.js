import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './MainContent/Footer/Footer.js'
import Body from './MainContent/Body/Body.js';
import Navbar from './MainContent/Navbar/Navbar.js';
import DoctorDetails from './components/DoctorDetails.js';
import JoinMeeting from "./components/join";
import VideoCallChat from "./components/meeting";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Body/>}></Route>
          <Route path="/DoctorDetails/:id" element={<DoctorDetails />}></Route>
          <Route path="/joining" element={<JoinMeeting />}></Route>
          <Route path="/Video/:id" element={<VideoCallChat/>}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

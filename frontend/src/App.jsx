// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventCard from './components/EventCard';
import EventItem from './components/EventItem';
import About from './components/About';
//import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LogIn from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import ContactUs from './components/ContactUs';
//import EventForm from './components/EventForm';

// import other components like Home, About, etc.

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn"); // Check if logged in
  const userType = window.localStorage.getItem("userType");
  return (
    <>
    <Router>
    <div>
    <Navbar isLoggedIn={isLoggedIn} userType={userType} />
    
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/" element={<EventCard />} />
        <Route path="/" element={<EventItem />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      
        <Route path="/" element={<Footer />} />
       
        
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="*" element={<Navigate to="/" />} />
          
        
        {/* Add other routes */}
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
    
  );

  
};

export default App;


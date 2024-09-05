import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Define your functional components for different routes
const Home = () => <h1>This is home!</h1>;
const About = () => <h1>This is about!</h1>;
const Contact = () => <h1>This is contact!</h1>;
const UserDetails = ({ id }) => <h1>User Details for ID: {id}</h1>; // New component for user details

export default function App() {
  return (
    <Router>
      <>
  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:id" element={<UserDetails />} /> {/* Dynamic route for user details */}
        </Routes>


        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/users/123">User 123</Link></li> {/* Example link with ID */}
          </ul>
        </nav>

        
      </>
    </Router>
  );
}

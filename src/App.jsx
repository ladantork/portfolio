// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './App.css';

// function App(){
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'; // Import the Home component
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState(null); // To track the active section
  const [expanded, setExpanded] = useState(false); // State to manage expansion

  // Function to handle clicks on each card
  const handleCardClick = (section) => {
    if (activeSection === section) {
      setActiveSection(null); // Collapse if already clicked
      setExpanded(false); // Collapse the card
    } else {
      setActiveSection(section); // Set the clicked section as active
      setExpanded(true); // Expand the card
    }
  };

  return (
    <div className="app-container">
      {/* Home Card */}
      <div className={`card ${expanded && activeSection === 'home' ? 'expanded' : ''}`} onClick={() => handleCardClick('home')}>
        <h2>Home</h2>
        {activeSection === 'home' && (
          <div className="card-content">
            <Home />
          </div>
        )}
      </div>

      {/* About Card */}
      <div className={`card ${expanded && activeSection === 'about' ? 'expanded' : ''}`} onClick={() => handleCardClick('about')}>
        <h2>About</h2>
        {activeSection === 'about' && (
          <div className="card-content">
            <About />
          </div>
        )}
      </div>

      {/* Projects Card */}
      <div className={`card ${expanded && activeSection === 'projects' ? 'expanded' : ''}`} onClick={() => handleCardClick('projects')}>
        <h2>Projects</h2>
        {activeSection === 'projects' && (
          <div className="card-content">
            <Projects />
          </div>
        )}
      </div>

      {/* Contact Card */}
      <div className={`card ${expanded && activeSection === 'contact' ? 'expanded' : ''}`} onClick={() => handleCardClick('contact')}>
        <h2>Contact</h2>
        {activeSection === 'contact' && (
          <div className="card-content">
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;




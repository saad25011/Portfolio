import React, { useState } from 'react';
import { Link } from 'react-scroll';

function header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDiv = () => {
    setIsOpen(!isOpen); // Toggle the state
  }
  return (
    <div className='navBar'>
        <h1>Saad The Ai Engineer </h1>
        <div className="menu" onClick={toggleDiv}>
          <img src="public/reorder.png" alt="" />
        </div>
        <div className="left" style={{ display: isOpen ? 'none' : 'flex' }}>
            <h2><Link to="projectGrid" smooth={true} duration={500}>Projects</Link></h2>
            
            <h2><Link to="about-me" smooth={true} duration={500}>About</Link></h2>
            <h2><Link to="contact" smooth={true} duration={500}>Contact</Link></h2>
        </div>
        
    </div>
  )
}

export default header
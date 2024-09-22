import React from 'react'
import { Link } from 'react-scroll';

function Bar() {
  const handleDownload = () => {
    fetch('public/Saad_the_Ai_engineer.pdf')
      .then(response => response.blob())
      .then(blob => {
        fileDownload(blob, 'Saad_the_Ai_Engineer.pdf');
      })
      .catch(error => console.error('Download failed:', error));
  };

  const color = () =>{
    
    console.log("working")
  
  }
  return (
    <div className='bar'>
      <div className="text">
        <div className="intro">
          <h1>Creative AI</h1>
          <h1 style={{color: '#00ADB5'}} className='eng'>Engineer</h1>
          <button onClick={color}><Link to="footer" smooth={true} duration={500}>Work with me</Link></button>
          <button onClick={handleDownload} className='check'>Download Cv</button>
        </div>
        <div className="arrow">
          <img src="public/Vector 187.png" alt="" />
          </div>
      </div>
      <div className="images">
          <img src="public/doodles mixed round.png" alt="" />
          
        <div className="person">
          <img src="public/Group 2346.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Bar
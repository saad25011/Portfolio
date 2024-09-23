import React from 'react'
import { Link } from 'react-scroll';
import fileDownload from 'file-download';
function Bars() {
  const handleDownload = () => {
    fetch('/Saad_the_Ai_engineer.pdf') // Fetching directly from the  directory
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a link element, use it to download the blob
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Saad_the_Ai_Engineer.pdf'); // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
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
          <img src="/Vector 187.png" alt="" />
          </div>
      </div>
      <div className="images">
          <img src="/doodles mixed round.png" alt="" />
          
        <div className="person">
          <img src="/Group 2346.png" alt="" />
          </div>
      </div>
    </div>
  )
}

export default Bars
import React from 'react'
import Foot from './Foot'
import Bar from './bar'
import Header from './header'
import { Link } from 'react-scroll';
import Aboutme from './Aboutme'
import Project from './Project';
import Contact from './Contact';
function App() {
  return (
    
    <div className='maaz'>    
      
      <Header/>

      <Bar/>
      <Project/>
      <Aboutme/>
      <Contact/>
      <Foot/>

      

    </div>
    
    
  )
}



export default App

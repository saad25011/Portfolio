import React from 'react'

function Aboutme() {
  return (
    <div className='about-me'>
        <div className="intro">
            <h1>About <span>me</span></h1>
            <p>
            I am an AI Engineer with a proven track record in building advanced AI solutions tailored to meet your business needs.
             My expertise in developing custom AI bots can revolutionize your operations by automating repetitive tasks, 
             delivering data-driven insights for smarter decision-making, and fostering innovation that sets your business apart from the competition.
              Whether you're looking to streamline workflows, enhance customer experiences, or optimize business processes, I am committed to creating scalable,
               cutting-edge AI systems that drive measurable growth.

            <h1 className='skills'>Skills</h1>
            <div className="skill">
              <h3><img src="/python.png" alt="" /> Python</h3>
              <h3><img src="/genai.png" alt="" /> GenAi</h3>
              <h3><img src="/chatbot.png" alt="" /> Chatbot</h3>
              <h3><img src="/pandas.png" alt="" /> Pandas</h3>
              <h3><img src="/images.png" alt="" /> Numpy</h3>
              <h3><img src="/coding.png" alt="" /> Machine Learning</h3>
              <h3><img src="/deep-learning.png" alt="" /> Deep Learning</h3>
              
              <h3><img src="/flask.avif" alt="" /> Flask </h3>
              <h3><img src="/app-development.png" alt="" /> Web development</h3>
              </div>
            </p>
        </div>
        <div className="image">
              <img src="/doodle items.png" alt="" />
              <div className="saad">
                
              </div>
        </div>

    </div>
  )
}

export default Aboutme
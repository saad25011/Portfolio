import React from 'react'

function Project() {
  return (
    <div className='projectGrid'>
        <div className="recent">
            <h1>My <span>recent</span> works</h1>
            <button id='python'>
                python
                </button>
                <button>
                    Chatbot
                </button>
                <button>
                    Automation
                </button>
                <button>
                Website
                </button>
            
        </div>
        <div className='project1'>
        <h1 className='projectName1'>RAG ChatBot</h1>
        <video width="600" controls>
            <source src="/0916.mp4" type="video/mp4" />
        </video>
        </div>
        <div className='project2'>
        <h1 className='projectName2'>Simple ChatBot</h1>
        <video width="600" controls>
            <source src="/simplechatbot.mp4" type="video/mp4" />
        </video>
        </div>
        <div className='project3'>
        <h1 className='projectName3'>Automation Bot</h1>
        <video width="600" controls>
            <source src="/Automation.mp4" type="video/mp4" />
        </video>
        </div>
        <div className='project4'>
        <h1 className='projectName4'> <a href="https://playful-puffpuff-ee7bc7.netlify.app/">Pepsi Clone</a></h1>
        <img src="/one.png" alt="" />
        <p>Click on Pepsi Clone to see....</p>
        </div>
        <div className='project5'>
        <h1 className='projectName5'><a href="https://cerulean-chebakia-11291a.netlify.app/">Tere Clone</a></h1>
        <img src="/two.png" alt="" />
        <p>Click on Tere Clone to see.....</p>
        </div>
        <div className='project6'>
        <h1 className='projectName6'><a href="https://transcendent-medovik-fe7e88.netlify.app/">Healthcare Clone</a></h1>
        <img src="/three.png" alt="" />
        <p>Click on Healthcare to see.....</p>
        </div>
    </div>
  )
}

export default Project
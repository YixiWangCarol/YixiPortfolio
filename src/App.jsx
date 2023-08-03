// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import { useState } from 'react';
const App = () => {
 // const [count, setCount] = useState(0)
const [navDisplay, setNavDisplay] = useState("project")
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#111]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar className="drop-shadow-2xl" navDisplay={navDisplay} setNavDisplay={setNavDisplay}/>
        {navDisplay==='project' || navDisplay==='hero'?<><Hero /> <Works /></>:''}
        </div>
        {/* {navDisplay==='project'?<Works />:''} */}
        {navDisplay==='skills'?<About />:''}
        {navDisplay==='contact'?<div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>:''}
       
      </div>
    </BrowserRouter>

  )
}

export default App

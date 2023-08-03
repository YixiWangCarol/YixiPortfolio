/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {SectionWrapper}  from "../hoc";

import {fadeIn,textVariant} from '../utils/motion'

const ServiceCard = ({index, title, icon})=>(

    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right','spring',0.5*index, 0.75)}
          className='w-full green-blue-gradient p-[5px] rounded-[80px]
          shadow-card'
          >
            <div
              options={{max:45,
                        scale:1,
                        speed:450}}
              className='bg-[#111] rounded-[20px] py-5 px-12
              min-h-[200px] flex justify-evenly items-center flex-col'
            >
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilt>
  )

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[20px]
      max-w-6xl leading-[30px]'>
       <h2><span className='text-[#02ed60]'>Frontend</span>: React | Javascript | Next.js | Html5 | Css | Tailwindcss | Git | MaterialUI | C# | C | Java</h2>
       <h2><span className='text-[#02ed60]'>Photography</span>: Digital and Film Photography</h2>
       <h2><span className='text-[#02ed60]'>Others</span>: 3D & 2D Animation |  Game Developer | Maya | Unity | Figma | AfterEffects | Premiere | PhotoShop</h2>
       
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
      
    </>
  )
}
// export default About
export default SectionWrapper(About, "skills");

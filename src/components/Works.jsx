import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { useState } from 'react'

const ProjectCard = ({index, name,belong,isShow, description, tags, image, source_code_link,source_code_display}) => {
  if(isShow==='frontend'){
    return (
      <motion.div
        variants={fadeIn("up","spring",index*0.5,0.75)}
        >
        <Tilt
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className={`${belong==='f'?'display':'hidden'} bg-[#1f1f1f] ${index%2==0?'flex-row-reverse':'flex-row'} 
          flex flex-col justify-between gap-10 drop-shadow-2xl p-5 rounded-2xl w-full md:flex-row`}>
            <div className='relative basis-1/2 h-[400px]' onClick={()=>window.open(source_code_display,"_blank")}>
              <img src={image}
                   alt={name}
                   className='w-full h-full object-cover rounded-2xl bg-[pink]'/>
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div onClick={(event) => {window.open(source_code_link,"_blank"); event.stopPropagation()}}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center
                   items-center cursor-pointer'>
                    <img src={github}
                         alt='github'
                         className='w-1/2 h-1/2 object-contain'/>
                </div>
              </div>
            </div>
            
            <div className='basis-1/2 flex flex-row justify-between flex-wrap'>
              <div className='mt-5'>
                <h3 className='text-[#02ed60] font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
              </div>
              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag)=>(
                  <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                ))}
              </div>
            </div>
        </Tilt>
      </motion.div>
    )
  }else{
    return (
      <motion.div
        variants={fadeIn("up","spring",index*0.5,0.75)}
        >
        <Tilt
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          
          className={`${belong==='o'?'display':'hidden'} bg-[#1f1f1f]  p-5 rounded-2xl sm:w-[320px] w-full `}>
            <div className='relative w-full h-[230px]' onClick={()=>window.open(source_code_display,"_blank")}>
              <img src={image}
                   alt={name}
                   className= 'bg-tertiary w-full h-full object-cover rounded-2xl'/>
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div onClick={(event) => {window.open(source_code_link,"_blank"); event.stopPropagation()}}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center
                   items-center cursor-pointer'>
                    <img src={github}
                         alt='github'
                         className='w-1/2 h-1/2 object-contain'/>
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h3 className='text-[#02ed60] font-bold text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag)=>(
                <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
            
        </Tilt>
      </motion.div>

    
    )
  }
  }
  

const Works = () => {
  const [isShow, setIsShow] = useState('frontend')
  const isF = ()=>{
    setIsShow('frontend')
    
  }
  const isO = () => {
    setIsShow('others')
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
        <div className='mt-10 flex flex-row text-xl gap-10 '>
          <span className={`${isShow==='frontend'?'opacity-100':'opacity-50'} hover:opacity-100 cursor-pointer`}
                onClick={isF}>
            Front end
          </span>
          <span className={`${isShow==='others'?'opacity-100':'opacity-50'} hover:opacity-100 cursor-pointer`}
                onClick={isO}>
            Others
          </span>
        </div>
      </motion.div>
     <div className='flex w-full'>
        <motion.p
          variants={fadeIn('','',0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        </motion.p>
     </div>

     <div className={`flex ${isShow==='frontend'?'flex-col':''} gap-7 mt-20 flex-wrap`}>
        {projects.map((project,index)=>(
          <ProjectCard key={`project-${index}`}
                       index={index}
                       {...project}
                       isShow={isShow}
                       />
         ))}
     </div>
    </>
  )
}

export default SectionWrapper(Works,'project')
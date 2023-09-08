import {motion} from "framer-motion"
import { styles } from '../styles'
import ComputersCanvas from './canvas/Computers'
import { StarsCanvas } from "./canvas"
import {  github } from "../assets"
import { ucllogo } from "../assets"
import { cv } from "../assets"
import { linkedin } from "../assets"
// import { yixiCV } from "../assets"
import yixiCV from "/YixiCv.pdf"
const Hero = () => {
  // const resumeDownload = ()=>{
  //   const resumePdfUrl = {yixiCV}; // 项目public文件夹中简历PDF文件的相对路径
  //   const link = document.createElement('a');
  //   link.href = resumePdfUrl;
  //   link.target = '_blank'; // 通过新的标签页打开PDF文件
  //   link.download = 'Yixi-cv.pdf'; // 设置下载的文件名
  //   link.click();
  // }
  

  return (
   
    <section className='relative w-full  h-screen mx-auto' id='hero'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
          <div className='flex flex-col justify-center items-center mt-5'>
             <div className='w-5 h-5 rounded-full bg-[#38ef7d]'/>
             <div className='w-1 h-40 green-gradient sm:h-80'/>
          </div>

          <div style={{zIndex:2}}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#02ed60]'>carol</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#eee]`}>A <span className="text-[#02ed60]">front-end developer.</span>  <br className='sm:block' hidden/>
            I am passionate about creating elegant, interactive web experiences and efficient websites.
            </p>
            <div className="flex flex-row gap-7 mt-5 lg:flex-col">
              <div className="flex flex-row items-center gap-5">
                <a href="https://github.com/YixiWangCarol" target="_blank">
                  <img src={github} alt="" className="w-8 h-8 object-contain opacity-50 hover:opacity-100 duration-150"/>
                </a>
                <a href="https://github.com/YixiWangCarol" target="_blank">
                  <span className="hidden lg:block text-[20px] opacity-50 hover:opacity-100 duration-150
                        hover:underline">YixiWangCarol</span>
                </a>
              </div>
              <div className="flex flex-row items-center gap-5">
                  <img src={ucllogo} alt="" className="w-8 h-8 rounded-full object-contain opacity-50 hover:opacity-100 duration-150"/>
                  <a href=""><span className="hidden lg:block text-[20px] opacity-50 hover:opacity-100 duration-150 ">University College London</span></a>
              </div>
              <div className="flex flex-row items-center gap-5 ">
                <a href={yixiCV} target="_blank">
                  <img src={cv} alt="" className="w-8 h-8 rounded-full object-contain opacity-50 hover:opacity-100 duration-150"
                   />
                </a>
                <a href={yixiCV} target="_blank">
                  <span className="hidden lg:block text-[20px] opacity-50 hover:opacity-100 duration-150 hover:underline">Resume</span>
                </a>
              </div>
              <div className="flex flex-row items-center gap-5 ">
                <a href="https://www.linkedin.com/in/yixi-carol-wang-307937239/" target="_blank">
                  <img src={linkedin} alt="linkedin" className="w-8 h-8 rounded-full object-contain opacity-50 hover:opacity-100 duration-150"
                   />
                </a>
                <a href="https://www.linkedin.com/in/yixi-carol-wang-307937239/" target="_blank">
                  <span className="hidden lg:block text-[20px] opacity-50 hover:opacity-100 duration-150 hover:underline">Linkedin</span>
                </a>
              </div>
            </div> 
          </div>
          
          {/* <ComputersCanvas/> */}
      </div>
      
      <ComputersCanvas/>
      <StarsCanvas/>
      
        <div className='absolute bottom-32 sm:bottom-10 w-full flex
        justify-center items-center'
        >
          <a href="#project">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
            flex justify-center items-start p-2'>
              <motion.dev
                animate={{
                  y:[0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1' 
              />
            </div>
          </a>
        </div>
     
      
    </section>
  )
}

export default Hero
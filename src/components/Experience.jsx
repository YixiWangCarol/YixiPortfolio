/* eslint-disable react/prop-types */
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"


const ExperienceCard = ({experience})=>{
  return (
    <VerticalTimelineElement
      contentStyle={{background:'#fff', color:'#02ed60'}}
      contentArrowStyle={{borderRight:'7px solid #02ed60'}}
      date={experience.date}
      iconStyle={{background:experience.iconBg}}
      icon={
        <div className='flex items-center justify-center w-full h-full'>
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain rounded-full"/>
        </div>
      }>
      <div>
        <h2>{experience.title}</h2>
        <p className="text-primary text-[22px] font-semibold
        " style={{margin:0}}>{experience.company_name}</p>
      </div>
      <ul className="nt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index)=>(
          <li key={`experience-point-${index}`}
              className="text-tertiary text-[16px]
              pl-1 tracking-wider"
          >{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my educational experience</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
     </motion.div>

     <div className="mt-20 flex flex-col">
        <VerticalTimeline>
           {experiences.map((experience,index)=>(
              <ExperienceCard key={index} experience={experience}/>
           ))}
        </VerticalTimeline>
     </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")

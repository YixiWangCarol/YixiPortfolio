/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {logo,logoyixi, menu, close} from '../assets';


const Navbar = (props) => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const {navDisplay, setNavDisplay} = props;
  console.log(navDisplay)
  return (
    <nav 
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-[#1f1f1f] shadow drop-shadow-xl  bg-opacity-90`}>
      <div 
        className='w-full flex justify-between items-center
        max-w-7xl mx-auto shadow-blue-500/50'>
          {/* <Link
            to="/"
            className='flex items-center gap-2'
            onClick={()=>{
              setActive('');
              window.scrollTo(0,0);
            }}>
              <img src={logoyixi} alt='logo' className='w-9 h-9 object-contain'/>
              <p className='text-white text-[18px] 
                 font-bold cursor-pointer flex hover:text-[#02ed60] duration-150'>
                  Yixi &nbsp;
                 <span className=' sm:block '>|&nbsp;
                  Wang</span></p>
          </Link> */}
          <a href="#hero" className='flex items-center gap-2'>
              <img src={logoyixi} alt='logo' className='w-9 h-9 object-contain'/>
              <p className='text-white text-[18px] 
                 font-bold cursor-pointer flex hover:text-[#02ed60] duration-150'
                 onClick={()=>(
                  setNavDisplay('hero')
                )}>
                  Yixi &nbsp;
                 <span className=' sm:block '>|&nbsp;
                  Wang</span></p>
          </a>
          <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map((link)=>(
                <li key={link.id}
                    className={`${active === link.title ? "text-white":"text-secondary"}
                    hover:text-white text-[18px]`}
                    // onClick={()=>setActive(link.title)}>
                    onClick={()=>{
                        setActive(link.title)
                        setNavDisplay(link.id)   
                    }}>
                  <a href={`#${link.id}`}>{link.title}
                  </a>
                </li>
              ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={()=>setToggle(!toggle)}/>
             <div className={`${!toggle?'hidden':'flex'} p-6 absolute top-20 
             right-0 min-w-[140px] black-gradient mx-4 my-2 z-10 rounded-xl` }>
                <ul className='list-none flex flex-col gap-4 justify-end items-start '>
                    {navLinks.map((link)=>(
                    <li key={link.id}
                      className={`${active === link.title ? "text-white":"text-secondary"}
                      font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={
                        ()=>{setActive(link.title)
                             setToggle(!toggle)
                             setNavDisplay(link.id)
                          }
                        }>
                      <a href={`#${link.id}`}>{link.title}
                      </a>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
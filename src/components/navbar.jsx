"use client"

import Link from "next/link"
import {useState} from "react";
import Image from "next/image";
import NavLink from "./navLink";
import {motion} from "framer-motion";

const links=[
  {url:"/",title:"Home"},
  {url:"/about",title:"About"},
  {url:"/projects",title:"Projects"},
  {url:"/contact",title:"Contact"},
];


const Navbar = () => {
  const [open,setOpen]=useState(false);

  const topVarients={
    closed:{
      rotation:0,
    },
    opened:{
      rotate:46,
      backgroundColor:"rgb(255,255,255)"
    }
  };
  const centerVarients={
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    }
  };
  const bottomVarients={
    closed:{
      rotation:0,
    },
    opened:{
      rotate:-46,
      backgroundColor:"rgb(255,255,255)"
    }
  };

  const listVarients={
    closed:{
      x:"100vw",
    },
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    },
  };
  const listItemVariants={
    closed:{
      x:"-10",
      opacity:0
    },
    opened:{
      x:0,
      opacity:1,
    },
  };
 
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl '>
      <div className="hidden md:flex gap-4 w-1/3">
        {/*LINKS*/}
      {links.map(link=>(
            <NavLink link={link} key={link.title}/> 
          ))}
      </div>
      {/*LOGO*/}
       <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link  href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center" >
          <span className="text-white mr-1">Tharun</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
          </Link>
        </div>  
        {/*SOCIAL*/}
        <div className="hidden md:flex gap-4 w-1/3 ">
          <Link href="https://github.com/Tharunvikas55">
          <Image src="/github.png" alt="" width={24} height={24}/>
          </Link>
          <Link href="https://leetcode.com/u/tharunvikas18/">
          <Image src="/linkedin.png" alt="" width={24} height={24}/>
          </Link>
          <Link href="https://twitter.com/STharunvikas/">
          <Image src="/twitter.png" alt="" width={24} height={24}/>
          </Link>
          <Link href="https://www.facebook.com/sstharun.vikas?mibextid=ZbWKwL">
          <Image src="/facebook.png" alt="" width={24} height={24}/>
          </Link>
          <Link href="https://www.instagram.com/tharun_kongu055?igsh=MTBobDRxbWx6NjN5NQ==">
          <Image src="/instagram.png" alt="" width={24} height={24}/>
          </Link> 
        </div>
       {/*RESPONSIVE MENU*/}   
       <div className="md:hidden " >
        {/*MENU BUTTON*/}
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
          <motion.div variants={topVarients} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVarients} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVarients} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded  origin-left"></motion.div>
        </button>
        
        {open &&(
          <motion.div variants={listVarients} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
          
          {links.map(link=>(
            <motion.div variants={listItemVariants} key={link.url}>
              <Link href={link.url}>{link.title}</Link>
              </motion.div>
          ))}
        </motion.div>
        )}
        </div>       
    </div>
  )
}
export default Navbar;

"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const handleDownload = () => {
    // Construct the URL to your resume file
    const resumeUrl = '/tharun_s_resume.pdf';
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the resume file
    link.href = resumeUrl;
    // Set the download attribute to force download
    link.setAttribute('download', 'Tharun_Resume.pdf');
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Programmatically trigger a click event on the anchor element
    link.click();
    // Remove the anchor element from the body
    document.body.removeChild(link);
  };
  return ( 
  <motion.div className="h-full " initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*IMAGE CONTAINER*/}
    <div className=" h-1/2 lg:h-full  lg:w-1/2 relative mb-6">
      <Image  src="/hero.png" alt="" fill className="object-contain"/>
    </div>
    
    
      {/*TEXT CONTAINER*/}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/*TITLE*/}
      <h1 className="sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">Crafting Digital Experiences,Desing Tomorrow.</h1>
      {/*DESC*/}
      <p className="md:text-xl">Welcome to my digital canvas,where innovation and creativity converge.with a keen eye for aesthetics and a mastery of code ,my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.</p>
      {/*BUTTONS*/}
      <div className=" w-full flex gap-4">
        <Link  href="/projects" >
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button></Link>
{/*         <button className="p-4 rounded-lg ring-1 ring-black" onClick={handleDownload}>Resume</button> */}
        <a href="https://peach-malissa-16.tiiny.site/" ><button className="p-4 rounded-lg ring-1 ring-black" >Resume</button></a>
      </div>
    </div>
    </div>
    <div className="m-2"></div>
  </motion.div>
  );
};

 export default Homepage;

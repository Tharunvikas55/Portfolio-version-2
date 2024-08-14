"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Grocery Management System",
    desc: "A dynamic Grocery Management System built with Node.js, MongoDB, Express,and EJS enables real-time access to product info, empowering swift and informed decisions. This implementation minimizes waiting times, enhancing operational efficiency effectively.",
    img: "/grocerymanagement.png",
    link: "https://github.com/Tharunvikas55/grocery_project_version1",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Vehicle Service Management System",
    desc: "Contributed to the Kongu College Hackathon, developing a Vehicle Service Management System web app for streamlined service and maintenance for efficient data handling and performance enhancement.",
    img: "/vehicleservice.png",
    link: "https://github.com/Tharunvikas55/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Detection Of Monkeypox Disease Using Deep Learning Techniques.",
    desc: "Utilizes deep learning models to detect monkeypox lesions from dermatological images, offering a promising automated solution for timely diagnosis and intervention during outbreaks.",
    img: "/monkeypox.png",
    link: "https://github.com/Tharunvikas55/",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Guess The Number Game",
    desc: "In a number guessing game, the user guesses a randomly generated secret number within a given number of attempts. After each guess, the user gets hints on whether their guess is too high, too low, or correct.",
    img: "/guessthenumber.png",
    link: "https://guessthenumber-tharuns-projects-dcc1edc1.vercel.app/",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "Course Exemption System",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "/courseexemption.png",
    link: "https://github.com/Tharunvikas55/",
  },
  {
    id: 6,
    color: "from-violet-300 to-purple-300",
    title: "React StopWatch",
    desc: "project involves creating a responsive and user-friendly stopwatch application using React. The stopwatch component is designed with a clean and intuitive interface, allowing users to start, pause, and reset the timer with ease.",
    img: "/stopwatch.png",
    link: "https://stopwatchtharunvikas-dn4o4f4by-tharuns-projects-dcc1edc1.vercel.app/",
  }
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://github.com/Tharunvikas55/grocery_project_version1",
  // },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full bg-gradient-to-r from-purple-300 to-red-300"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative bg-gradient-to-r from-purple-300 to-red-300 " ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-gradient-to-r from-purple-300 to-red-300">
          <motion.div style={{ x }} className="flex ">
            <div className="h-screen w-screen flex items-center justify-center " />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              > 
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[300px] xl:w-[500px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  
                  <Link href={item.link} className=" justify-end">
                  
                    <button className="p-1 flex text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-3 rounded"> <Image src="/github.png" alt=""  width={24} height={24}/>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="w-screen h-screen flex flex-col pl-5 ml-2 gap-16 items-center justify-center text-center ">
        <h1 className="text-3xl  md:text-6xl lg:text-7xl xl:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
               Full - Stack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
          </motion.div>
          
        </div>
      </div>
      {/* <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-r from-purple-300 to-red-300 ">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
               Full-Stack Developer and UI - UX Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PortfolioPage;

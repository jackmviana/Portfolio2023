import { motion as m } from "framer-motion"
import { container, item } from "../animation"

export default function About () {
    
    return (
        <m.div 
                animate={{ x: "0%" }}
                initial={{ x: "-200%" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
            <div className=" bg-neutral-800 h-screen grid place-items-center px-8 md:px-40 ">
                <div className="">
                    <m.div
                    animate={{ x: "0%" }}
                    initial={{ x: "-200%" }}
                    transition={{ delay: .5, duration: 0.5}}
                    className=" w-fit mb-4 ">
                        <p className=" text-white text-center red-color text-base md:text-xl">
                            About Me</p>
                    </m.div>
                    <div className=" max-w-3xl">
                        <m.h1
                            animate={{ y: 0 }}
                            initial={{ y: "600%" }}
                            transition={{ delay: .7, duration: 0.5}} className=" text-left font-semibold mb-8 text-base md:text-2xl name-info">
                            Hi! I'm Jack, a software engineer based in the greater Boston area. I create full-stack applications, websites, and also love making my wesbite designs in Figma, come to life with CSS. </m.h1>
                    </div>
                    <div className=" max-w-3xl">
                        <m.h1
                            animate={{ y: 0 }}
                            initial={{ y: "600%" }}
                            transition={{ delay: .7, duration: 0.5}} className=" text-left font-semibold mb-8 text-base md:text-2xl name-info">
                            My day-to-day consists of buidling my own challenging full-stack applications to increase my skills, learning new languages like Swift & C++, and contributing to open-source projects on Github.</m.h1>
                    </div>
                    <m.div
                    animate={{ x: "0%" }}
                    initial={{ x: "-200%" }}
                    transition={{ delay: .5, duration: 0.5}}
                    className=" w-fit ">
                        <p className=" text-left text-base md:text-xl red-color">
                        Some technologies I use :</p>
                    </m.div>
                    <m.div
                    animate={{ y: 0 }}
                    initial={{ y: "600%" }}
                    transition={{ delay: .7, duration: 1}} 
                    className=" flex justify-center mt-10 md:mt-32">
                        <m.div variants={container} initial="hidden" animate="show" className=" grid grid-cols-4 gap-x-12 gap-y-8 md:gap-x-32 md:gap-y-16">
                            <div className=" overflow-hidden">
                                <m.li className="devicon-javascript-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-python-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-html5-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-react-original text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-css3-plain text-neutral-300 md:text-7xl text-4xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-tailwindcss-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-django-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                            <div className=" overflow-hidden">
                                <m.li className="devicon-postgresql-plain text-neutral-300 text-4xl md:text-7xl" variants={item}></m.li>
                            </div>
                        </m.div>
                    </m.div>
                </div>
            </div>
        </m.div>
    )
}
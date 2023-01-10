import { motion as m } from "framer-motion"
import { container, item } from "../animation"

export default function Contact () {
    
    return (
        <m.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
            <div className=" bg-neutral-600 h-screen">
                <div className=" grid place-items-center px-8 md:px-40 pt-40">
                <m.div
                    animate={{ opacity: 1, y: "0%"}}
                    initial={{ opacity: 0, y:"60%"}}
                    transition={{ delay: .7, duration: 0.5}}
                    className=" w-fit ">
                        <h1 className=" name-info font-semibold text-5xl text-center">Socials</h1>
                    </m.div>
                <div>
                    <m.div
                    animate={{ opacity: 1, y: "0%"}}
                    initial={{ opacity: 0, y:"60%"}}
                    transition={{ delay: .7, duration: 1}} 
                    className=" flex justify-center mt-10 md:mt-6">
                        <m.div variants={container} initial="hidden" animate="show" className=" grid grid-cols-2 gap-x-12 gap-y-8 md:gap-x-32 md:gap-y-16">
                            <m.div
                            whileHover={{ scale: 1.05}}
                            className=" overflow-hidden">
                                <m.p variants={item}><a href="https://github.com/jackmviana" target="blank">
                                <img className=" h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=""/>
                                </a></m.p>
                            </m.div>
                            <m.div
                            whileHover={{ scale: 1.05}}
                            className=" overflow-hidden">
                                <m.p variants={item}><a href="https://linkedin.com/in/jack-viana" target="blank">
                                <img className=" h-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt=""/>
                                </a></m.p>
                            </m.div>
                        </m.div>
                    </m.div>
                </div>
                
                <m.div
                    animate={{ opacity: 1, y: "0%"}}
                    initial={{ opacity: 0, y:"60%"}}
                    transition={{ delay: .7, duration: 0.5}}
                    className=" w-fit mb-4 mt-24 md:mt-36">
                        <h1 className=" font-semibold text-5xl text-center name-info">Let's talk!</h1>
                        <m.button
                        whileHover={{scale: 1.1}}
                        className=" bg-neutral-800 rounded-xl p-4 mt-8">
                        <a className=" text-3xl red-color" href="mailto:jack.viana2019@gmail.com">Contact Me</a>
                    </m.button>
                </m.div>
                </div>
            </div>
        </m.div>
    )
}
import { motion as m } from "framer-motion"
import { container, item } from "../animation"
import GG from '../Assets/GG.png'
import Duet from '../Assets/DUET.png'
import Valorant from '../Assets/ValorantV.png'

export default function Projects () {
    
    return (
        <m.div 
                initial={{ x: "100%"}}
                animate={{ x: 0}}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
        <div className=" bg-neutral-700 h-screen pt-28 md:pt-40 px-8 md:px-40">
            <div>
            <m.div
                animate={{ x: "0%" }}
                initial={{ x: "200%" }}
                transition={{ delay: .5, duration: 0.5}}
                className=" w-fit mb-4 ">
                    <p className=" text-left text-xl red-color">My Projects</p>
            </m.div>
            <m.div
                animate={{ y: 0 }}
                initial={{ y: "600%" }}
                transition={{ delay: .7, duration: 1}} 
                className=" flex justify-center mt-8 md:mt-28">
                    <m.div variants={container} initial="hidden" animate="show" className=" relative grid grid-cols-3 ">
                        <div className=" overflow-hidden">
                            <m.div className=" absolute -right-2 md:right-0 w-44 h-24 md:w-96 md:h-48 bg-neutral-400 rounded-xl mx-2 md:mx-5" variants={item} style={{backgroundImage: `url(${GG})`, backgroundSize: 'cover'}}>
                            </m.div>
                            <m.div className=" w-44 h-24 md:w-96 md:h-48 red-bg rounded-xl absolute -top-4 -right-8 -z-10 mx-2 md:mx-5" variants={item}>
                            </m.div>
                            <m.div variants={item} className=" absolute left-0  w-44 h-48 md:w-96 md:h-48 bg-neutral-800 rounded-xl mx-2 md:mx-12 md:p-4 p-3">
                                <p className=" red-color">GG</p>
                                <h1 className=" text-xs md:text-base name-info">GG is a social app where gamers can browse games, rate, review, and track them. A full-stack app made with React and Django.</h1>
                                <div className=" flex space-x-7 md:space-x-44 mt-8 md:mt-12">
                                    <a className=" text-xs md:text-base transition-all ease-in hover:text-white red-color" href="https://github.com/jackmviana/GG-FE2/tree/main/gg-app" target="blank">Front-End</a>
                                    <a className=" text-xs md:text-base  transition-all ease-in hover:text-white red-color" href="https://github.com/jackmviana/GG-BE" target="blank">Back-End</a>
                                </div>
                            </m.div>

                            <m.div className=" absolute top-48 -right-2 md:top-60 md:right-0 w-44 h-24 md:w-96 md:h-48 bg-neutral-400 rounded-xl mx-2 md:mx-5 hover:scale-150" variants={item} style={{backgroundImage: `url(${Duet})`, backgroundSize: 'cover'}}>
                            </m.div>
                            <m.div className=" w-44 h-24 md:w-96 md:h-48 red-bg rounded-xl absolute top-44 md:top-56 -right-8 -z-10 mx-2 md:mx-5" variants={item}>
                            </m.div>
                            <m.div variants={item} className=" absolute top-52 md:top-60 left-0 w-44 h-48 md:w-96 md:h-48 bg-neutral-800 rounded-xl mx-2 md:mx-12 md:p-4 p-3">
                                <p className=" red-color">Duet</p>
                                <h1 className=" text-xs md:text-base name-info">DUET is a social app where you can make connections with others based on your taste in music. A group project made with React and Sequelize.</h1>
                                <div className=" flex space-x-7 md:space-x-44 mt-4 md:mt-6">
                                    <a className=" text-xs md:text-base transition-all ease-in hover:text-white red-color" href="https://github.com/DuetSocial/Duet_FE" target="blank">Front End</a>
                                    <a className=" text-xs md:text-base transition-all ease-in hover:text-white red-color" href="https://github.com/DuetSocial/Duet_BE" target="blank">Back End</a>
                                </div>
                            </m.div>
                    
                            <div className=" absolute top-60 ">
                                <m.div className=" absolute top-40 md:top-60 -right-2 md:right-0 w-44 h-24 md:w-96 md:h-48 bg-neutral-400 rounded-xl mx-2 md:mx-5 hover:scale-150" variants={item} style={{backgroundImage: `url(${Valorant})`, backgroundSize: 'cover'}}>
                                </m.div>
                                <m.div className=" w-44 h-24 md:w-96 md:h-48 red-bg rounded-xl absolute top-36 md:top-56 -right-8 -z-10 mx-2 md:mx-5" variants={item}>
                                </m.div>
                                <m.div variants={item} className=" absolute top-44 md:top-60 left-0 w-44 h-48 md:w-96 md:h-48 bg-neutral-800 rounded-xl mx-2 md:mx-12 md:p-4 p-3">
                                    <p className=" red-color">Valorant V</p>
                                    <h1 className=" text-xs md:text-base name-info">The Valorant V is an app made to learn more about Valorant's agents in a interactive way. Features include, a custom loadout, play, and shop. React app pulling data from a Valorant API.</h1>
                                    <div className=" flex space-x-12 md:space-x-56 mt-1 md:mt-1">
                                        <a className=" text-xs md:text-base transition-all ease-in hover:text-white red-color" href="https://github.com/jackmviana/Valorant-API" target="blank">Front End</a>
                                        <a className=" text-xs md:text-base transition-all ease-in hover:text-white red-color" href="https://valorantv.netlify.app/" target="blank">Site</a>
                                    </div>
                                </m.div>
                            </div>
                        </div>
                    </m.div>
                </m.div>
            </div>
        </div>
        </m.div>
    )
}
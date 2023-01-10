import { motion } from "framer-motion"

export default function Main() {

    return (
        <motion.div 
                initial={{ y: "100% "}}
                animate={{ y: "0% "}}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
            <div className=" pt-40 px-8 md:pl-40 name-div">

                <div className=" left-side">
                    <div>
                        <p className=" mb-4 text-sm md:text-lg red-color">Hey there, my name is</p>
                    </div>
                    <div className="">
                        <motion.h1
                        animate={{ y: 0 }}
                        initial={{ y: "100%" }}
                        transition={{ delay: .5, duration: 0.5}}
                        className=" text-5xl md:text-7xl font-bold text-gray-200">Jack Viana</motion.h1>
                    </div>
                    <div className=" max-w-fit">
                    <motion.h1
                        animate={{ y: 0 }}
                        initial={{ y: "100%" }}
                        transition={{ delay: .5, duration: 0.5}}className=" mt-4 text-white font-bold text-2xl md:text-3xl name-info">I'm a software engineer with a deep skillset in coding, launching web-pages, and applications.</motion.h1>
                    </div>
                </div>

                <div className=" right-side">
                    
                </div>

            </div>
        </motion.div>
        
    )
}
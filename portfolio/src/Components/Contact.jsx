import { motion as m } from "framer-motion"

export default function Contact () {
    
    return (
        <m.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.75, ease: "easeOut" }}
                exit={{ opacity: 1 }}>
        <div className=" bg-neutral-600 h-screen">
            
        </div>
        </m.div>
    )
}
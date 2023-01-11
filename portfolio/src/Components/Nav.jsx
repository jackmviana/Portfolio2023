import { Link } from "react-router-dom"
import { useState } from 'react';
import { useSpring, animated } from "react-spring"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownProps = useSpring({
    height: isOpen ? "auto" : 0,
    overflow: "hidden"
  })

  return (
    <div className="bg-transparent z-20 relative">
      <div className="md:flex md:items-center md:justify-between">
        <div className="md:hidden">
          <button 
            className="inline-flex items-center p-2 ml-20 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="hidden md:flex gap-10 md:items-center bg-neutral-800 p-4 rounded-xl">
            <Link to='/about' className="md:ml-4 red-color hover:text-white text-sm  transition-all ease">
                About
            </Link>
            <Link to='/projects' className="md:ml-4 red-color hover:text-white text-sm transition-all ease">
                Projects
            </Link>
            <Link to='/contact' className="md:ml-4 red-color hover:text-white text-sm transition-all ease">
                Contact
            </Link>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTl0-yHphxwqtNPZxNmgtzPe5xXY11a8GTqIMeAt_Ty4YjKw8TVLVqyKCjm9Va8tx4yWZSPBB75bsVy/pub"
            target="blank" className="md:ml-4 red-color hover:text-white text-sm transition-all ease">Resume
</a>
        </div>
      </div>
      <animated.div style={dropdownProps}>
        <ul className=" flex flex-col gap-10 justify-end bg-neutral-800 p-4 rounded-xl w-fit">
            <Link to='/about'>
                <li className=" transition-all ease-in-out decoration-transparent red-color hover:text-white">About</li>   
            </Link>
            <Link to='/projects'>
                <li className=" transition-all ease-in-out decoration-transparent red-color hover:text-white">Projects</li>
            </Link>             
            <Link to='/contact'>
                <li className=" transition-all ease-in-out decoration-transparent red-color hover:text-white">Contact</li>
            </Link>
            <li>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTl0-yHphxwqtNPZxNmgtzPe5xXY11a8GTqIMeAt_Ty4YjKw8TVLVqyKCjm9Va8tx4yWZSPBB75bsVy/pub"
                target="blank">
                <button className=" bg-transparent red-color hover:text-white transition-all ease">Resume</button>
                </a>
            </li>
        </ul>
      </animated.div>
        </div>
    )
}
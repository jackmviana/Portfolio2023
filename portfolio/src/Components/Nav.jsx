import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <div className=" bg-transparent z-20 relative">
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full p-5 mt-4 md:mt-0 rounded-xl md:block md:w-auto bg-neutral-800" id="navbar-default">
            <ul className=" flex flex-col md:flex-row gap-10 justify-end">
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
            </div>
        </div>
    )
}
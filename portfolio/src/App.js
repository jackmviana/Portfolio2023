import { Route, Routes } from 'react-router';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { motion as m } from "framer-motion"
import { Link } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default function App() {
  return (
    <div className="App relative">
      <div className=' absolute left-0 md:left-16 top-10 z-20'>
        <Link to='/'>
          <m.p
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{
            scale: 1,
            rotate: -180,
            borderRadius: "100%"
        }}
          className=" bg-neutral-800 p-2 rounded-lg decoration-transparent red-color hover:text-white absolute left-12 md:text-2xl">JV</m.p>   
          </Link>
      </div>
      <div className=' absolute right-16 top-10'>
        <Nav/>
      </div>

      <AnimatePresence initial={true}>
        <Routes>
          <Route path='/' element={<Main key='main'/>}/>
          <Route path='/about' element={<About key='about'/>}/>
          <Route path='/projects' element={<Projects key='projects'/>}/>
          <Route path='/contact' element={<Contact key='contact'/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

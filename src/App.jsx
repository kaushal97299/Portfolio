
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from './componite/Navbar'
import './App.css'
import Home from "./componite/HomePage";
import About from "./componite/About";
import Skills from "./componite/Skill";
import Projects from "./componite/Project";
import Footer from "./componite/Footer";
import ContactForm from "./componite/Contact";

function App() {


  return (
    <>
     <Router>
      <Navbar/>
     
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/contact" element={<ContactForm/>} />
      {/* <Route path="/Footer" element={<Footer/>} /> */}
     </Routes>

      <Footer/>
     </Router>
     
    </>
  )
}

export default App

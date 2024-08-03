import './App.css'
import Preloader from "./components/Preloader.jsx";
import Header from "./components/Header.jsx";
import Why from "./components/Why.jsx";
import Services from "./components/Service.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Residential from "./components/Residential.jsx"
import Commercial from "./components/Commercial.jsx";
import About from "./components/About.jsx";
import Inspection from "./components/Inspection.jsx";

function App() {

    return (
        <>
            <Preloader/>
            <Header/>
            <Services/>
            <Residential/>
            <Commercial/>
            <Inspection/>
            <Works/>
            <Why/>
            <Contact/>
            <Footer/>
            <a href="#" className="scroll-top"><i className="lni lni-chevron-up"></i></a>
        </>
    )
}

export default App

import './App.css'
import Preloader from "./components/Preloader.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Why from "./components/Why.jsx";
import Services from "./components/Service.jsx";
import Works from "./components/Works.jsx";
import Plans from "./components/Plans.jsx";
import Team from "./components/Team.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <>
            <Preloader/>
            <Header/>
            <About/>
            <Why/>
            <Services/>
            <Works/>
            <Plans/>
            <Team/>
            <Blog/>
            <Contact/>
            <Footer/>
            <a href="#" className="scroll-top"><i className="lni lni-chevron-up"></i></a>
        </>
    )
}

export default App

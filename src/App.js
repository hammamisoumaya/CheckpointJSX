
import './App.css';
import NavBarr from './Navv/NavBarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe/AboutMe';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <div >
     <NavBarr/>
     <AboutMe/>
     <Project/>
     <hr/>
     <Contact/>
     <hr/>
     <Footer/>
     
    </div>
  );
}

export default App;

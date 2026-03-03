import { px } from 'framer-motion';
import './App.css'
import Contact from './components/Footer/Contact'
import Projects from './components/Footer/Contact/Projects';
import Header from './components/Header'
import AboutMe from './components/Footer/Contact/Projects/About-me';
import Habilities from './components/Footer/Contact/Projects/About-me/Habilities';
import ContactMe from './components/Footer/Contact/Projects/About-me/Habilities/Experiences/Contact-me';
import WhatsappButton from './components/WhatsappButton/WhatsappButton';


function App() {
 // Separação entre os componentes
  const separationStyle = {
    border: '1px solid #484848',
    height: '1px',
  };

  return(
    <>
    <WhatsappButton></WhatsappButton>
    <Header />
    <Contact />
    <Projects></Projects>
    <AboutMe></AboutMe>
    <Habilities></Habilities>
    <ContactMe></ContactMe>
    </>
  )
}

export default App
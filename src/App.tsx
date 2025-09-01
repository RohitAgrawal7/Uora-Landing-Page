import { motion } from 'framer-motion';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Journals from './components/Journals';
import Editorial from './components/Editorial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Vision />
        <Mission />
        <Journals />
        <Editorial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
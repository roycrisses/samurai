import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';

// Placeholder components for new pages (will be implemented next)
const About = () => <div className="pt-32 text-center text-2xl font-bold">ABOUT PAGE COMING SOON</div>;
const Services = () => <div className="pt-32 text-center text-2xl font-bold">SERVICES PAGE COMING SOON</div>;
const Contact = () => <div className="pt-32 text-center text-2xl font-bold">CONTACT PAGE COMING SOON</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#030303] text-white relative selection:bg-[#ff2a2a] selection:text-white font-sans">
        {/* Global Grain Texture */}
        <div className="noise-overlay"></div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ChatWidget />

        {/* Floating Action Button / Corner Element */}
        <div className="fixed bottom-0 left-0 p-8 hidden md:block z-40">
          <div className="w-2 h-24 bg-[#ff2a2a]"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
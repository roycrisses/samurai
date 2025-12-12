import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white relative selection:bg-[#ff2a2a] selection:text-white font-sans flex flex-col">
      {/* Global Grain Texture */}
      <div className="noise-overlay"></div>

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>

      <Footer />

      <ChatWidget />

      {/* Floating Action Button / Corner Element */}
      <div className="fixed bottom-0 left-0 p-8 hidden md:block z-40">
        <div className="w-2 h-24 bg-[#ff2a2a]"></div>
      </div>
    </div>
  );
}

export default App;
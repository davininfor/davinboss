import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Home from './components/Home';
import Works from './components/Works';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

type View = 'Home' | 'Works' | 'Skills' | 'About' | 'Contact';

export default function App() {
  const [activeView, setActiveView] = useState<View>('Home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system boot
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'Home': return <Home />;
      case 'Works': return <Works />;
      case 'Skills': return <Skills />;
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      default: return <Home />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-[9999]">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="w-24 h-24 border-4 border-cyber-cyan/20 border-t-cyber-cyan rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-cyber-purple/20 border-b-cyber-purple rounded-full animate-spin-slow" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-mono text-cyber-cyan tracking-[0.5em] uppercase text-sm animate-pulse"
        >
          Initializing System...
        </motion.p>
        <div className="mt-4 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-cyber-cyan"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-cyber-cyan selection:text-cyber-black overflow-x-hidden">
      <Cursor />
      
      {/* Background Elements */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black pointer-events-none" />
      
      {/* HUD Accents */}
      <div className="fixed top-0 left-0 w-full h-1 bg-cyber-cyan/20 z-50" />
      <div className="fixed bottom-0 left-0 w-full h-1 bg-cyber-purple/20 z-50" />
      
      <Navbar activeView={activeView} onViewChange={setActiveView} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer HUD */}
      <footer className="fixed bottom-4 left-6 z-40 hidden lg:block">
        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Server: Online</span>
          </div>
          <div className="w-[1px] h-3 bg-white/10" />
          <span>Lat: 0.02ms</span>
          <div className="w-[1px] h-3 bg-white/10" />
          <span>User: Davin_PK</span>
        </div>
      </footer>
    </div>
  );
}

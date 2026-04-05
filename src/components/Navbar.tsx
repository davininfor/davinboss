import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, X, Home, Briefcase, Zap, User, Mail } from 'lucide-react';

type View = 'Home' | 'Works' | 'Skills' | 'About' | 'Contact';

interface NavbarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

const navItems: { label: View; icon: any }[] = [
  { label: 'Home', icon: Home },
  { label: 'Works', icon: Briefcase },
  { label: 'Skills', icon: Zap },
  { label: 'About', icon: User },
  { label: 'Contact', icon: Mail },
];

export default function Navbar({ activeView, onViewChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: View) => {
    onViewChange(view);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-cyber-gunmetal/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-cyber-cyan/10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.label)}
              className={`relative group flex flex-col items-center gap-1 transition-colors ${
                activeView === item.label ? 'text-cyber-cyan' : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-cyber-black px-2 py-1 border border-white/10 rounded">
                {item.label}
              </span>
              {activeView === item.label && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 w-1 h-1 bg-cyber-cyan rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="fixed top-6 right-6 z-[60] md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-cyber-gunmetal/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-cyber-cyan shadow-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cyber-black z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
            
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.label)}
                className={`text-4xl font-bold tracking-tighter flex items-center gap-4 ${
                  activeView === item.label ? 'text-cyber-cyan' : 'text-gray-500'
                }`}
              >
                <span className="text-sm font-mono text-cyber-purple">0{index + 1}</span>
                {item.label}
              </motion.button>
            ))}

            <div className="absolute bottom-12 text-center">
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                Davin Pangestu Kusumo // System v1.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

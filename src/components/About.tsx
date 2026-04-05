import { motion } from 'motion/react';
import { User, Cpu, Shield, Brain, Trophy, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-6xl font-bold tracking-tighter mb-4">ABOUT <span className="text-cyber-cyan">DAVIN</span></h2>
        <p className="text-gray-400 font-mono flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyber-cyan" />
          THE GAMER-DEVELOPER PERSONA
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform" />
          <div className="absolute inset-0 bg-cyber-purple/10 border border-cyber-purple/30 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform" />
          <div className="relative bg-cyber-gunmetal/50 border border-white/10 p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-2xl flex items-center justify-center">
                <User size={32} className="text-cyber-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Davin Pangestu Kusumo</h3>
                <p className="text-sm font-mono text-cyber-cyan">ID: DP-2K25-STRAT</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Bridging the gap between competitive gaming precision and high-performance software engineering. 
              With a background in tactical analysis and a passion for full-stack development, I create 
              digital experiences that are as efficient as a well-executed scrim.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <Trophy size={20} className="text-cyber-purple mb-2" />
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Tournament</p>
                <p className="text-sm font-bold">3rd Place SMALACUP</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <Activity size={20} className="text-cyber-cyan mb-2" />
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Focus</p>
                <p className="text-sm font-bold">Full-Stack Dev</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-xl flex items-center justify-center">
              <Brain size={24} className="text-cyber-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Strategic Analysis</h4>
              <p className="text-gray-400 leading-relaxed">
                Applying the same level of focus required in professional PUBG matches to complex software architecture. 
                Every line of code is a tactical decision.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-cyber-purple/10 border border-cyber-purple/30 rounded-xl flex items-center justify-center">
              <Cpu size={24} className="text-cyber-purple" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">High-Performance Dev</h4>
              <p className="text-gray-400 leading-relaxed">
                Building scalable applications using modern stacks like React, Node.js, and TypeScript. 
                Optimized for speed, reliability, and user experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-xl flex items-center justify-center">
              <Shield size={24} className="text-cyber-cyan" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Cyber-Security Mindset</h4>
              <p className="text-gray-400 leading-relaxed">
                Integrating security best practices from the ground up, ensuring that every project is 
                defended against unauthorized access and vulnerabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

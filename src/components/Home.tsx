import { motion } from 'motion/react';
import { Trophy, Github, Instagram, MessageSquare, Terminal, Cpu, Shield, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 bg-cyber-gunmetal/30 border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Terminal size={24} className="text-cyber-cyan" />
          </div>
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg mb-6 flex items-center justify-center">
              <Cpu size={32} className="text-cyber-cyan" />
            </div>
            <h1 className="text-5xl font-bold tracking-tighter mb-2 glitch-hover">
              DAVIN <span className="text-cyber-cyan">PANGESTU</span> KUSUMO
            </h1>

            {/* Profile Image */}
            <div className="relative w-32 h-32 mb-6 group/img">
              <div className="absolute inset-0 bg-cyber-cyan/20 rounded-full blur-md group-hover/img:bg-cyber-cyan/40 transition-colors" />
              <div className="relative w-full h-full rounded-full border-2 border-cyber-cyan/50 overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                <img
                  src="/profilevin.jpeg"
                  alt="Davin Pangestu Kusumo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* HUD Accent for Image */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyber-purple rounded-br-lg" />
            </div>

            <p className="text-lg text-gray-400 font-mono mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
              ESPORTS STRATEGIST & FULL-STACK DEVELOPER
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/davininfor" target="_blank" className="p-3 bg-white/5 hover:bg-cyber-cyan/20 border border-white/10 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="https://instagram.com/davinpangestuu" target="_blank" className="p-3 bg-white/5 hover:bg-cyber-purple/20 border border-white/10 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/081218811217" target="_blank" className="p-3 bg-white/5 hover:bg-green-500/20 border border-white/10 rounded-lg transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* HUD Elements */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-30">
            <div className="w-1 h-4 bg-cyber-cyan" />
            <div className="w-1 h-6 bg-cyber-cyan" />
            <div className="w-1 h-4 bg-cyber-cyan" />
          </div>
        </motion.div>

        {/* Tournament Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-cyber-purple/10 border border-cyber-purple/30 p-8 rounded-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4">
            <Trophy size={24} className="text-cyber-purple animate-bounce" />
          </div>
          <h3 className="text-sm font-mono text-cyber-purple mb-4 tracking-widest uppercase">Tournament Status</h3>
          <p className="text-3xl font-bold tracking-tight mb-2">3rd Place Winner</p>
          <p className="text-gray-400 font-mono text-sm">SMALACUP 2k25 - ESPORT PUBG Tournament</p>
          
          <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-cyber-purple"
            />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-mono text-gray-500">
            <span>RANK: ELITE</span>
            <span>WIN RATE: 85%</span>
          </div>
        </motion.div>

        {/* GitHub Activity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 bg-cyber-gunmetal/30 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono text-cyber-cyan tracking-widest uppercase flex items-center gap-2">
              <Activity size={16} /> GitHub Activity
            </h3>
            <span className="text-[10px] font-mono text-gray-500">LAST SYNC: JUST NOW</span>
          </div>
          
          <div className="flex gap-1 h-12 items-end">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${Math.random() * 100}%` }}
                transition={{ delay: i * 0.05, repeat: Infinity, repeatType: 'reverse', duration: 1 + Math.random() }}
                className="flex-1 bg-cyber-cyan/30 rounded-t-sm"
              />
            ))}
          </div>
          <p className="mt-4 text-xs font-mono text-gray-400">Committing code with tactical precision.</p>
        </motion.div>

        {/* Tactical HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-cyber-gunmetal/30 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
        >
          <Shield size={32} className="text-cyber-cyan mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">Security Status</h4>
          <p className="text-xl font-bold text-cyber-cyan">ENCRYPTED</p>
        </motion.div>

        {/* System Load Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-cyber-gunmetal/30 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
        >
          <div className="relative w-12 h-12 mb-4">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-white/10"
                strokeDasharray="100, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.path
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: "75, 100" }}
                transition={{ duration: 2 }}
                className="text-cyber-purple"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono">75%</span>
          </div>
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">System Load</h4>
        </motion.div>

      </div>
    </div>
  );
}

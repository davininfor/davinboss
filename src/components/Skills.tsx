import { motion } from 'motion/react';
import { Zap, Code, Shield, Brain, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Development',
    icon: Code,
    color: 'cyber-cyan',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    title: 'Esports Strategy',
    icon: Brain,
    color: 'cyber-purple',
    skills: [
      { name: 'Strategic Analysis', level: 95 },
      { name: 'Game Logic', level: 90 },
      { name: 'Team Coordination', level: 85 },
      { name: 'Tactical Planning', level: 92 },
    ],
  },
  {
    title: 'UI/UX for Gamers',
    icon: Layout,
    color: 'cyber-cyan',
    skills: [
      { name: 'HUD Design', level: 85 },
      { name: 'Visual Feedback', level: 80 },
      { name: 'Interactive Prototyping', level: 75 },
      { name: 'Accessibility', level: 70 },
    ],
  },
  {
    title: 'Security & Systems',
    icon: Shield,
    color: 'cyber-purple',
    skills: [
      { name: 'Cyber-Security Prototype', level: 75 },
      { name: 'System Architecture', level: 80 },
      { name: 'Networking', level: 70 },
      { name: 'Terminal Control', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-6xl font-bold tracking-tighter mb-4">SYSTEM <span className="text-cyber-purple">CAPABILITIES</span></h2>
        <p className="text-gray-400 font-mono flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyber-purple" />
          TECHNICAL & STRATEGIC PROFICIENCY
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: catIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-cyber-gunmetal/10 border border-white/5 p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <category.icon size={48} className={`text-${category.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}`} />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 bg-${category.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}/10 border border-${category.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}/30 rounded-xl flex items-center justify-center`}>
                <category.icon size={24} className={`text-${category.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}`} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">{skill.name}</span>
                    <span className="text-xs font-mono text-cyber-cyan">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: (catIndex * 0.1) + (skillIndex * 0.1) }}
                      className={`h-full bg-${category.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical HUD Overlay */}
            <div className="absolute bottom-4 left-4 flex gap-1 opacity-20">
              <div className="w-1 h-2 bg-cyber-cyan" />
              <div className="w-1 h-3 bg-cyber-cyan" />
              <div className="w-1 h-2 bg-cyber-cyan" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background HUD Elements */}
      <div className="fixed bottom-0 right-0 p-12 opacity-5 pointer-events-none hidden lg:block">
        <Terminal size={200} className="text-cyber-cyan" />
      </div>
    </div>
  );
}

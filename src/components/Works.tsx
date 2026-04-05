import { motion } from 'motion/react';
import { ExternalLink, Github, Trophy, Layout, Shield } from 'lucide-react';

const projects = [
  {
    title: 'SMALACUP 2k25: Tactical Analysis',
    description: 'A comprehensive tactical breakdown of the winning strategies used in the SMALACUP 2k25 PUBG tournament. Analyzed positioning, loot paths, and engagement timing.',
    tags: ['Esports', 'Strategy', 'PUBG'],
    icon: Trophy,
    color: 'cyber-purple',
    image: '/public/smalacup.jpeg',
    link: '#',
    github: 'https://github.com/davininfor',
  },
  {
    title: 'Esports Team Dashboard',
    description: 'A high-performance management dashboard for competitive teams. Real-time stats tracking, scrim scheduling, and performance analytics.',
    tags: ['React', 'Node.js', 'Firebase'],
    icon: Layout,
    color: 'cyber-cyan',
    link: '#',
    github: 'https://github.com/davininfor',
  },
  {
    title: 'Cyber-Security Prototype',
    description: 'An experimental security monitoring tool designed to detect unauthorized access patterns in high-traffic gaming servers.',
    tags: ['Python', 'Security', 'Networking'],
    icon: Shield,
    color: 'cyber-purple',
    link: '#',
    github: 'https://github.com/davininfor',
  },
];

export default function Works() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-6xl font-bold tracking-tighter mb-4">SELECTED <span className="text-cyber-cyan">WORKS</span></h2>
        <p className="text-gray-400 font-mono flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyber-cyan" />
          PROJECTS & TOURNAMENT HIGHLIGHTS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-cyber-gunmetal/20 border border-white/10 rounded-2xl relative overflow-hidden flex flex-col clipped-corner hover:border-cyber-cyan/50 transition-colors"
          >
            {/* Project Image Hero */}
            {project.image && (
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-gunmetal/90 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                   <div className={`p-3 bg-${project.color}/20 border border-${project.color}/40 rounded-xl backdrop-blur-sm`}>
                    <project.icon size={20} className={`text-${project.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}`} />
                  </div>
                </div>
              </div>
            )}

            <div className="p-8 flex flex-col flex-grow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {!project.image && (
                <div className="mb-6 flex justify-between items-start">
                  <div className={`p-4 bg-${project.color}/10 border border-${project.color}/30 rounded-xl`}>
                    <project.icon size={24} className={`text-${project.color === 'cyber-cyan' ? 'cyber-cyan' : 'cyber-purple'}`} />
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" className="p-2 hover:text-cyber-cyan transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} target="_blank" className="p-2 hover:text-cyber-cyan transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              )}

              {project.image && (
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a href={project.github} target="_blank" className="p-2 bg-black/40 backdrop-blur-md rounded-lg hover:text-cyber-cyan transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} target="_blank" className="p-2 bg-black/40 backdrop-blur-md rounded-lg hover:text-cyber-cyan transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tactical HUD Overlay */}
            <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
              <div className="text-[8px] font-mono text-cyber-cyan text-right">
                ID: {Math.random().toString(36).substring(7).toUpperCase()}
                <br />
                STATUS: DEPLOYED
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

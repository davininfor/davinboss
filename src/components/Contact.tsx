import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Instagram, Github, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-6xl font-bold tracking-tighter mb-4">ESTABLISH <span className="text-cyber-cyan">COMMUNICATION</span></h2>
        <p className="text-gray-400 font-mono flex items-center gap-2">
          <span className="w-8 h-[1px] bg-cyber-cyan" />
          SECURE CHANNEL ENCRYPTION ACTIVE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-cyber-gunmetal/20 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
              <div className="w-10 h-10 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-xl flex items-center justify-center">
                <Terminal size={20} className="text-cyber-cyan" />
              </div>
              Direct Links
            </h3>
            
            <div className="space-y-6">
              <a href="mailto:dpangestuk@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyber-cyan/50 transition-colors group">
                <Mail size={24} className="text-cyber-cyan group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold">dpangestuk@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/081218811217" target="_blank" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-green-500/50 transition-colors group">
                <MessageSquare size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-sm font-bold">081218811217</p>
                </div>
              </a>
              <div className="flex gap-4">
                <a href="https://instagram.com/davinpangestuu" target="_blank" className="flex-1 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyber-purple/50 transition-colors group">
                  <Instagram size={24} className="text-cyber-purple group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Instagram</p>
                    <p className="text-sm font-bold">@davinpangestuu</p>
                  </div>
                </a>
                <a href="https://github.com/davininfor" target="_blank" className="flex-1 flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-white/50 transition-colors group">
                  <Github size={24} className="text-white group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">GitHub</p>
                    <p className="text-sm font-bold">@davininfor</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-cyber-gunmetal/20 border border-white/10 p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Operator Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-cyan transition-colors font-mono text-sm"
                placeholder="ENTER NAME..."
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Secure Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-cyan transition-colors font-mono text-sm"
                placeholder="ENTER EMAIL..."
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Transmission Content</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-cyan transition-colors font-mono text-sm resize-none"
                placeholder="ENTER MESSAGE..."
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all ${
                isSent ? 'bg-green-500 text-white' : 'bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/80'
              }`}
            >
              {isSending ? (
                <div className="w-5 h-5 border-2 border-cyber-black border-t-transparent rounded-full animate-spin" />
              ) : isSent ? (
                'TRANSMISSION SUCCESSFUL'
              ) : (
                <>
                  <Send size={18} />
                  SEND TRANSMISSION
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

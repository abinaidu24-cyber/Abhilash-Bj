import { motion } from 'motion/react';
import { CheckCircle, Leaf, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    title: 'Direct Sourcing',
    desc: 'Bypassing middlemen. We source directly from organized farm networks to ensure maximum freshness and traceability.',
    icon: Leaf,
  },
  {
    title: 'Strict Quality Control',
    desc: 'Multi-stage inspection protocols from harvesting to final loading. We adhere to international food safety standards.',
    icon: CheckCircle,
  },
  {
    title: 'Export Packaging',
    desc: 'Sea-freight optimized packaging designed to maintain moisture levels and prevent damage during long transit periods.',
    icon: Zap,
  },
  {
    title: 'Competitive Pricing',
    desc: 'Optimized supply chain models allow us to provide premium quality at market-leading rates for bulk importers.',
    icon: BarChart3,
  },
  {
    title: 'Buyer-Centric approach',
    desc: 'Dedicated account managers for international clients, ensuring smooth communication across time zones.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-primary-950 text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800 rounded-full blur-[120px] opacity-20 -mr-64 -mt-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Strategic Advantages</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Why Partner with BELBHOM?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-primary-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-primary-400" size={28} />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{feature.title}</h4>
              <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-8 bg-primary-700 rounded-2xl flex flex-col justify-center items-center text-center"
          >
            <h4 className="text-2xl font-display font-bold mb-4">Ready for Export?</h4>
            <p className="text-white/80 mb-8">Discuss your specific volume requirements with our trade experts today.</p>
            <a href="#rfq" className="bg-white text-primary-900 px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-stone-100 transition-colors">
               Contact Trade Desk
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

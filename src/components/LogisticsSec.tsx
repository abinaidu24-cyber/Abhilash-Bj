import { motion } from 'motion/react';
import { Anchor, Ship, Box, Calendar, MapPin } from 'lucide-react';

export default function Logistics() {
  const steps = [
    { title: 'Processing', desc: 'Washing, grading, and moisture normalization.', icon: Box },
    { title: 'Packaging', desc: 'PP bags, bulk containers, or retail OEM.', icon: Box },
    { title: 'India Port', desc: 'Handling via major Indian ports (Mundra/Haldia/Kochi).', icon: Anchor },
    { title: 'International', desc: 'Sea freight to global destinations.', icon: Ship },
  ];

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-primary-950 uppercase mb-4">Logistics</h2>
            <h3 className="text-4xl font-extrabold text-primary-950 mb-8">Supply Network.</h3>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-md">
              Optimized for global lead times and container efficiency.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 border border-gray-100">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-primary-950 mb-2">{step.title}</h5>
                  <p className="text-[10px] text-gray-400 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

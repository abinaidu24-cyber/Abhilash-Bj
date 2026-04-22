import { motion } from 'motion/react';
import { Globe2, Landmark, Briefcase, FileSignature } from 'lucide-react';

export default function GlobalFocus() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[2rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700 rounded-full blur-[100px] opacity-20 -mr-24 -mt-24"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm">International Partnerships</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-8">Empowering Global Importers</h3>
              <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                BELBHOM is designed specifically for the needs of B2B international trade. Whether you are a large-scale industrial manufacturer or a specialized organic retailer, we have the capacity to support your growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Landmark size={24} className="text-primary-400" />
                  </div>
                  <span className="font-semibold">Wholesale Bulk Supply</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <FileSignature size={24} className="text-primary-400" />
                  </div>
                  <span className="font-semibold">Long-term Contracts</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Briefcase size={24} className="text-primary-400" />
                  </div>
                  <span className="font-semibold">OEM / Private Labeling</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Globe2 size={24} className="text-primary-400" />
                  </div>
                  <span className="font-semibold">FOB/CIF/CNF Support</span>
                </div>
              </div>
            </div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h4 className="text-primary-400 font-bold text-xl mb-6 flex items-center">
                 <span className="w-8 h-px bg-primary-400 mr-3"></span>
                 Current Trade Regions
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {['Middle East / GCC', 'Southeast Asia', 'European Union', 'North America', 'Africa', 'Oceania'].map((region) => (
                  <div key={region} className="flex items-center text-stone-200">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></span>
                    {region}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-stone-400 text-sm">
                * We are actively expanding to new territories. Minimum Order Quantity (MOQ) varies by product category. 
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

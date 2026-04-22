import { motion } from 'motion/react';
import { ArrowRight, Download, ShieldCheck, Truck, PackageCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-primary-950 mb-8 tracking-tighter">
            Premium Coconut &<br />
            Byproducts Exporter.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-xl leading-relaxed text-balance">
            Based in India, serving global importers, wholesale distributors, and food manufacturers with unmatched consistency and export-grade quality.
          </p>

          <div className="flex flex-wrap gap-12 pt-12 border-t border-gray-200">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-950">45+</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mt-1">Countries Served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-950">ISO 22000</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mt-1">Certified Facility</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-950">18 Days</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mt-1">Avg. Global Lead Time</span>
            </div>
            <div className="flex flex-col border-l border-gray-100 pl-8">
              <span className="text-2xl font-bold text-primary-950">Nhava Sheva</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mt-1">Primary Hub</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

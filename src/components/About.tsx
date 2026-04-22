import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-700 uppercase mb-4">Our Legacy</h2>
            <h3 className="text-4xl font-display font-bold text-stone-900 mb-6 leading-tight">
              India's Dynamic Hub for Premium Coconut Exports
            </h3>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                BELBHOM stands at the forefront of the international coconut trade, bridging the gap between India's fertile agricultural landscape and global markets. Our journey is rooted in a deep commitment to quality, integrity, and sustainable sourcing.
              </p>
              <p>
                As a specialized export trading company, we recognize that international buyers demand more than just a product—they demand consistency, transparency, and a partner they can trust for long-term supply.
              </p>
              <p className="font-medium text-stone-800">
                Our mission is simple: to deliver the purest coconut-based products to every corner of the world, maintaining the highest standards of food safety and logistical efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10">
              <div>
                <h4 className="text-3xl font-display font-bold text-primary-800">100%</h4>
                <p className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Direct Sourcing</p>
              </div>
              <div>
                <h4 className="text-3xl font-display font-bold text-primary-800">24/7</h4>
                <p className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Logistic Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2565&auto=format&fit=crop"
                alt="Coconut Oil"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d019cb5?q=80&w=2574&auto=format&fit=crop"
                alt="Coconut Products"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1526018619827-742375837862?q=80&w=2670&auto=format&fit=crop"
                alt="Export Logistics"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1493190152961-38e759f2f6a9?q=80&w=2574&auto=format&fit=crop"
                alt="Global Shipping"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'fresh-coconut',
    name: 'Fresh Coconuts',
    description: 'Selected for size and water content. Fully matured or tender variants available.',
    useCases: ['Supermarkets', 'Beverage Industry', 'Fruit Wholesalers'],
    image: 'https://images.unsplash.com/photo-1596434444220-4e0078170c0c?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'virgin-oil',
    name: 'Virgin Coconut Oil',
    description: 'Cold-pressed from fresh coconut milk. High in lauric acid, additive-free.',
    useCases: ['Pharmaceuticals', 'Premium Cosmetics', 'Health Foods'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d019cb5?q=80&w=2574&auto=format&fit=crop',
  },
  {
    id: 'refined-oil',
    name: 'Refined Coconut Oil (RBD)',
    description: 'Odorless and colorless oil with high smoke point for industrial food processing.',
    useCases: ['Food Manufacturing', 'Confectionery', 'Bakery'],
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2565&auto=format&fit=crop',
  },
  {
    id: 'shell-charcoal',
    name: 'Coconut Shell Charcoal',
    description: 'Superior grade activated charcoal raw material. High carbon content.',
    useCases: ['Water Filtration', 'Industrial Heating', 'Energy Sector'],
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2671&auto=format&fit=crop',
  },
  {
    id: 'copra',
    name: 'Milling Copra',
    description: 'Dried coconut kernels with high oil yield. Sun-dried or kiln-dried options.',
    useCases: ['Oil Extraction Plants', 'Animal Feed', 'Industrial Use'],
    image: 'https://images.unsplash.com/photo-1526018619827-742375837862?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 'coir-fiber',
    name: 'Coir Fiber (Golden/Brown)',
    description: 'Natural fiber extracted from husks. High tensile strength and elasticity.',
    useCases: ['Upholstery', 'Soil Erosion Control', 'Horticulture'],
    image: 'https://images.unsplash.com/photo-1493190152961-38e759f2f6a9?q=80&w=2574&auto=format&fit=crop',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-primary-950 uppercase mb-4">The Collection</h2>
          <h3 className="text-4xl font-extrabold text-primary-950 mb-6">Expert Portfolio</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 border border-gray-200 flex flex-col h-full gap-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-primary-950">
                  {index % 2 === 0 ? 'International Grade' : 'Export Standard'}
                </span>
                <h4 className="text-xl font-bold text-gray-900">{product.name}</h4>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">
                {product.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Inquiry Ready</span>
                <a
                  href="#rfq"
                  className="text-[10px] font-bold text-primary-950 uppercase tracking-widest hover:underline flex items-center"
                >
                  Details <ArrowRight size={10} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Globe, Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Logistics', href: '#logistics' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-bottom border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold tracking-tight text-primary-950">
              BELBHOM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[1px] text-gray-600 hover:text-primary-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="text-[10px] font-bold tracking-widest text-primary-950 uppercase">EN / FR / AR</span>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-primary-700 p-2"
              id="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-stone-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-stone-700 hover:bg-primary-50 hover:text-primary-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#rfq"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary-700 text-white px-5 py-3 rounded-sm text-base font-semibold mt-4"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

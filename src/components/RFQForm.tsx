import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { InquiryFormData } from '../types';

export default function RFQForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    product: '',
    quantity: '',
    destination: '',
    buyerType: '',
    email: '',
    whatsapp: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('RFQ Submitted:', formData);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="rfq" className="py-24 bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-4">Request Bulk Quote</h2>
            <h3 className="text-4xl font-bold mb-8">Secure Your<br />Bulk Supply Today.</h3>
            <p className="text-white/60 mb-12 max-w-sm leading-relaxed">
              Direct farm sourcing & factory pricing for international containers. Response guaranteed in 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="w-5 h-5 border border-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                <span>Export-Ready Packaging Standards</span>
              </div>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="w-5 h-5 border border-white/20 rounded-full flex items-center justify-center text-[10px]">✓</div>
                <span>Third-Party SGS Inspection Support</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {submitted ? (
              <div className="bg-white/5 p-12 border border-white/10 text-center">
                <h4 className="text-2xl font-bold mb-4">Inquiry Received</h4>
                <button onClick={() => setSubmitted(false)} className="text-primary-400 text-xs font-bold uppercase tracking-wider">Back to Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Product Requirement</label>
                  <select 
                    name="product" 
                    required 
                    value={formData.product}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 p-4 outline-hidden focus:border-white/40 transition-all text-sm text-white"
                  >
                    <option value="" className="bg-primary-950">Select Grade</option>
                    <option value="fresh" className="bg-primary-950">Husked Coconuts</option>
                    <option value="virgin-oil" className="bg-primary-950">Virgin Coconut Oil</option>
                    <option value="refined-oil" className="bg-primary-950">Refined Coconut Oil</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Quantity (MT)</label>
                    <input 
                      type="text" 
                      name="quantity" 
                      placeholder="Min 18 MT"
                      required 
                      value={formData.quantity}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/20 p-4 outline-hidden focus:border-white/40 transition-all text-sm text-white" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Destination Port</label>
                    <input 
                      type="text" 
                      name="destination" 
                      placeholder="e.g. Rotterdam"
                      required 
                      value={formData.destination}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/20 p-4 outline-hidden focus:border-white/40 transition-all text-sm text-white" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Business Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="procurement@company.com"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 p-4 outline-hidden focus:border-white/40 transition-all text-sm text-white" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="bg-white text-primary-950 p-4 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity"
                >
                  Get Quote in 24 Hours
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

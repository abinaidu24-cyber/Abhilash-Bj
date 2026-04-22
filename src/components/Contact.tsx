import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex space-x-6 p-8 bg-stone-50 rounded-2xl border border-stone-100 items-start">
            <div className="bg-primary-100 p-3 rounded-xl text-primary-700">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Corporate Office</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                4th Floor, Global Trade Center,<br />
                Business Hub, Kochi,<br />
                Kerala, India - 682001
              </p>
            </div>
          </div>

          <div className="flex space-x-6 p-8 bg-stone-50 rounded-2xl border border-stone-100 items-start">
            <div className="bg-primary-100 p-3 rounded-xl text-primary-700">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Inquiry Support</h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-1">
                General: info@belbhom.com
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                Trade: trade@belbhom.com
              </p>
            </div>
          </div>

          <div className="flex space-x-6 p-8 bg-stone-50 rounded-2xl border border-stone-100 items-start">
            <div className="bg-primary-100 p-3 rounded-xl text-primary-700">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">Trade Desk</h4>
              <p className="text-stone-500 text-sm leading-relaxed mb-2 font-medium">
                +91 000 000 0000
              </p>
              <a 
                href="https://wa.me/910000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 font-bold hover:underline text-sm"
              >
                <MessageCircle size={16} className="mr-1" />
                WhatsApp Priority
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

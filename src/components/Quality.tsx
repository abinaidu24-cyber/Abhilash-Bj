import { motion } from 'motion/react';
import { ClipboardCheck, Droplets, FlaskConical, ThermometerSun } from 'lucide-react';

export default function Quality() {
  const standards = [
    { title: 'Hygiene Standards', desc: 'GMP compliant handling and processing facilities.', icon: ClipboardCheck },
    { title: 'Moisture Control', desc: 'Precision drying to prevent aflatoxin and mold.', icon: Droplets },
    { title: 'Moisture Analysis', desc: 'Lab testing for fat content and purity levels.', icon: FlaskConical },
    { title: 'Climate Control', desc: 'Optimal storage temperatures for raw byproduct stability.', icon: ThermometerSun },
  ];

  return (
    <section id="quality" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-primary-950 uppercase mb-4">Quality Standards</h2>
            <h3 className="text-4xl font-extrabold text-primary-950 mb-10 leading-tight">
              Zero-Compromise<br />Export Standards.
            </h3>

            <div className="grid sm:grid-cols-2 gap-10">
              {standards.map((s, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white border-l-4 border-primary-700 rounded-r-xl shadow-sm">
              <p className="text-stone-700 italic">
                "We conduct rigorous independent inspections before every vessel leaves the port, guaranteeing that the specification you ordered is the exact specification you receive."
              </p>
              <p className="text-stone-900 font-bold mt-4">— Quality Compliance Desk, BELBHOM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

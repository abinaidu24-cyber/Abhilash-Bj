export default function Footer() {
  return (
    <footer className="bg-white text-gray-400 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold uppercase tracking-widest text-primary-950">
          &copy; 2024 BELBHOM EXPORTS PVT LTD. All Rights Reserved.
        </div>
        
        <div className="flex gap-12">
          {['Terms of Trade', 'Global Logistics', 'Contact Support'].map(item => (
            <span key={item} className="text-[10px] font-bold uppercase tracking-widest hover:text-primary-950 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

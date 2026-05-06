import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t-2 border-[#EAB308]/20 py-8 px-6 mt-auto shrink-0 w-full z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-4">
            <img src="/chq-logo.png" alt="CHQ Logo" className="h-12 w-12 rounded-xl object-contain" />
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
                Empowering your journey to civil service success.
              </p>
              <p className="text-slate-500 text-xs italic">
                Made with ❤️ for Filipino Aspirants
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#EAB308] font-bold mb-1 text-sm tracking-wide">Quick Links</h3>
            <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Home</Link>
            <Link to="/dashboard" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Dashboard</Link>
            <Link to="/learn" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Learn</Link>
            <Link to="/practice" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Practice</Link>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#EAB308] font-bold mb-1 text-sm tracking-wide">Support</h3>
            <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Contact Us</Link>
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">FAQ</Link>
            <Link to="#" className="text-slate-400 hover:text-white text-sm transition-colors w-fit font-medium">Privacy Policy</Link>
          </div>

          {/* Column 4: Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#EAB308] font-bold text-sm tracking-wide">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1a2235] border border-white/5 hover:border-[#EAB308] flex items-center justify-center transition-all group hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EAB308] group-hover:scale-110 transition-transform"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1a2235] border border-white/5 hover:border-[#EAB308] flex items-center justify-center transition-all group hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EAB308] group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1a2235] border border-white/5 hover:border-[#EAB308] flex items-center justify-center transition-all group hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EAB308] group-hover:scale-110 transition-transform"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-[11px] font-semibold tracking-widest uppercase">© 2026 PACSER. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

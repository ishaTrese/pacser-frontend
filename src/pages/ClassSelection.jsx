import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { useAuth } from '../context/AuthContext';
import { Briefcase, FileText } from 'lucide-react';

export default function ClassSelection() {
  const { saveUserClass } = useAuth();
  const navigate = useNavigate();

  const handleSelect = (className) => {
    saveUserClass(className);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col font-sans">
      <Navbar />

      <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-6 py-12 justify-center">
        
        <div className="text-center mb-12">
          <h1 className="text-white font-black text-4xl mb-4">
            Select Your <span className="text-[#EAB308]">Class</span>
          </h1>
          <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">
            Which civil service examination are you preparing for? You can change this later in your profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Professional Card */}
          <button 
            onClick={() => handleSelect('Professional')}
            className="group bg-[#1a2235] rounded-3xl border border-white/10 p-8 shadow-xl hover:border-[#EAB308] hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all flex flex-col items-center text-center h-full hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-full bg-[#0d1117] border border-[#EAB308]/30 flex items-center justify-center mb-6 group-hover:bg-[#EAB308]/10 transition-colors">
              <Briefcase className="text-[#EAB308]" size={36} />
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">Professional</h2>
            <p className="text-slate-400 font-medium mb-6">
              For individuals seeking professional or technical positions in the government requiring a bachelor's degree.
            </p>
            <div className="mt-auto pt-4 w-full">
              <span className="inline-block bg-[#EAB308] text-slate-900 font-bold px-6 py-3 rounded-full w-full group-hover:bg-[#fde047] transition-colors uppercase tracking-widest text-sm">
                Select Professional
              </span>
            </div>
          </button>

          {/* Sub-Professional Card */}
          <button 
            onClick={() => handleSelect('Sub-Professional')}
            className="group bg-[#1a2235] rounded-3xl border border-white/10 p-8 shadow-xl hover:border-[#EAB308] hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] transition-all flex flex-col items-center text-center h-full hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-full bg-[#0d1117] border border-[#EAB308]/30 flex items-center justify-center mb-6 group-hover:bg-[#EAB308]/10 transition-colors">
              <FileText className="text-[#EAB308]" size={36} />
            </div>
            <h2 className="text-white font-bold text-2xl mb-3">Sub-Professional</h2>
            <p className="text-slate-400 font-medium mb-6">
              For individuals seeking clerical, trades, and crafts positions in the government. High school graduates can apply.
            </p>
            <div className="mt-auto pt-4 w-full">
              <span className="inline-block bg-[#EAB308] text-slate-900 font-bold px-6 py-3 rounded-full w-full group-hover:bg-[#fde047] transition-colors uppercase tracking-widest text-sm">
                Select Sub-Professional
              </span>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

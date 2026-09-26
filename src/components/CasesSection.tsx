import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { Heart, Activity, Zap, CheckCircle2 } from 'lucide-react';

interface CasesSectionProps {
  doctor: DoctorProfile;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ doctor }) => {
  const { totalHandled, totalOPD, categories } = doctor.casesData;

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Heart className="w-6 h-6 text-sky-700" />;
      case 1:
        return <Zap className="w-6 h-6 text-sky-700" />;
      case 2:
      default:
        return <Activity className="w-6 h-6 text-sky-700" />;
    }
  };

  return (
    <section id="cases" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Clinical Cases & Special Procedures
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Demonstrated procedural track record across acute coronary revascularizations, pacemaker implantations, and structural heart therapies.
          </p>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        {/* 1. CASES HANDLED METRIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Catheterization Laboratory Cases
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                {totalHandled} Procedures
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Diagnostic angiographies, complex angioplasties (PTCA), and device implants.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Activity className="w-7 h-7" />
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Outpatient Consultations & Evaluations
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                {totalOPD} Consultations
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Pre-procedural risk assessments, second opinions, and post-infarction care.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Activity className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* 2. SURGERIES / OPERATIONS & 3. SPECIAL PROCEDURES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-sky-400 transition-all flex flex-col justify-between shadow-2xs"
            >
              <div>
                {/* Header Icon + Count */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-sky-700 flex items-center justify-center border border-slate-200 shadow-2xs">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-100 text-sky-900">
                    {cat.count} Cases
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">
                  {cat.title}
                </h3>
                <div className="text-xs font-semibold text-sky-700 mb-3">
                  {cat.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Procedures Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Procedures Handled:
                  </span>
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Conducted at Indraprastha Apollo Cath Lab</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

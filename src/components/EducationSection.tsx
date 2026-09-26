import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { GraduationCap, ArrowRight, Award, ShieldCheck, FileCheck } from 'lucide-react';

interface EducationSectionProps {
  doctor: DoctorProfile;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ doctor }) => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Education & Medical Qualifications
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Follows the rigorous medical progression: <strong className="text-slate-900">MBBS → Master&apos;s (MD) → Super-Specialty Qualifications (DM Cardiology)</strong>.
          </p>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        {/* MBBS -> Master's -> Qualifications Flow Pathway */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {doctor.educationFlow.map((edu, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border-2 border-slate-200/90 hover:border-sky-500 shadow-sm transition-all flex flex-col justify-between"
              >
                {/* Stage Badge & Step Indicator */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {edu.stage}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 border border-sky-100">
                    {idx === 0 && <GraduationCap className="w-6 h-6" />}
                    {idx === 1 && <FileCheck className="w-6 h-6" />}
                    {idx === 2 && <Award className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-semibold text-sky-700 mt-1 mb-3">
                    {edu.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 w-full">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{edu.highlight}</span>
                  </div>
                </div>

                {/* Arrow connector between stages on desktop */}
                {idx < doctor.educationFlow.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-300 items-center justify-center shadow-xs text-sky-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

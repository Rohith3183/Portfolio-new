import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { Building2, Clock, CheckCircle2, Shield, Activity } from 'lucide-react';

interface ExperienceSectionProps {
  doctor: DoctorProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ doctor }) => {
  const { totalYears, hospitals, areasOfExperience } = doctor.experience;

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Professional Clinical Experience
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Over <strong className="text-slate-900">{totalYears}</strong> of specialized practice across premier tertiary cardiology hospitals and high-volume catheterization labs.
          </p>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        {/* 1. YEARS OF EXPERIENCE BANNER */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-sky-600/30 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                Experience Milestone
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {totalYears} Active Cardiology Practice
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Specialized in emergency interventions, device therapies, and outpatient heart care.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs text-sky-200">
            <Shield className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Admitting Privileges at Indraprastha Apollo Hospitals</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 2. HOSPITALS / ORGANIZATIONS */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-serif font-medium text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-700" />
                <span>Hospitals & Organizations</span>
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 space-y-8">
              {hospitals.map((hosp, hIdx) => (
                <div key={hIdx} className="relative">
                  {/* Node icon */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center shadow-xs ${
                    hIdx === 0
                      ? 'bg-sky-700 border-white text-white'
                      : 'bg-white border-slate-300 text-slate-500'
                  }`}>
                    {hIdx === 0 ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    ) : (
                      <Building2 className="w-3.5 h-3.5" />
                    )}
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all ${
                    hIdx === 0
                      ? 'bg-white border-sky-300 shadow-md'
                      : 'bg-white border-slate-200'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                        {hosp.period}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {hosp.location}
                      </span>
                    </div>

                    <h4 className="text-xl font-serif font-bold text-slate-900">
                      {hosp.name}
                    </h4>

                    <div className="text-xs sm:text-sm font-semibold text-sky-800 mb-3">
                      {hosp.role}
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {hosp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. AREAS OF EXPERIENCE */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-serif font-medium text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-sky-700" />
                <span>Areas of Experience</span>
              </h3>
            </div>

            <div className="space-y-4">
              {areasOfExperience.map((area, aIdx) => (
                <div
                  key={aIdx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {area.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

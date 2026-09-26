import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { BookOpen, FileText, Presentation, Calendar, CheckCircle } from 'lucide-react';

interface PublicationsSectionProps {
  doctor: DoctorProfile;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ doctor }) => {
  const [activeTab, setActiveTab] = useState<'published' | 'research' | 'conferences'>('published');

  const { publishedPapers, researchPapers, conferences } = doctor.publications;

  return (
    <section id="publications" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Publications & Research
          </h2>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        {/* 3 Categories Tab Switcher matching wireframe: Published papers | Research papers | Conferences */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80 max-w-xl">
          <button
            onClick={() => setActiveTab('published')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'published'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>Published Papers ({publishedPapers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('research')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'research'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4 text-sky-600" />
            <span>Research Papers ({researchPapers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('conferences')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'conferences'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Presentation className="w-4 h-4 text-sky-600" />
            <span>Conferences ({conferences.length})</span>
          </button>
        </div>

        {/* TAB 1: PUBLISHED PAPERS */}
        {activeTab === 'published' && (
          <div className="space-y-4">
            {publishedPapers.map((paper, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-colors shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-100 text-sky-800">
                    {paper.roleOrIndex || 'Published Paper'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{paper.year}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1 leading-snug">
                  {paper.title}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-sky-700 mb-2">
                  {paper.journalOrEvent}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {paper.description}
                </p>

                {paper.linkText && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-md border border-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{paper.linkText}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: RESEARCH PAPERS */}
        {activeTab === 'research' && (
          <div className="space-y-4">
            {researchPapers.map((paper, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-colors shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-100 text-indigo-800">
                    {paper.roleOrIndex || 'Research Paper'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{paper.year}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1 leading-snug">
                  {paper.title}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-sky-700 mb-2">
                  {paper.journalOrEvent}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {paper.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: CONFERENCES */}
        {activeTab === 'conferences' && (
          <div className="space-y-4">
            {conferences.map((conf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-colors shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                    {conf.roleOrIndex || 'Invited Conference'}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{conf.year}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-1 leading-snug">
                  {conf.title}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-sky-700 mb-2">
                  {conf.journalOrEvent}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {conf.description}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

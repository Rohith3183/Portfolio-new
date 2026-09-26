import React, { useRef, useEffect } from 'react';
import { ExternalLink, ShieldCheck, Building } from 'lucide-react';
import { DoctorProfile } from '../data/doctor';

interface HeroProps {
  doctor: DoctorProfile;
}

export const Hero: React.FC<HeroProps> = ({ doctor }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sendPlayerCommand = (command: 'playVideo' | 'pauseVideo') => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: '' }),
        '*'
      );
    }
  };

  const handleMouseEnter = () => {
    // When cursor enters video container, video plays automatically
    sendPlayerCommand('playVideo');
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // When the screen scrolls down, pause the video automatically
      if (currentScrollY > lastScrollY + 5) {
        sendPlayerCommand('pauseVideo');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also pause if video container scrolls completely out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            sendPlayerCommand('pauseVideo');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-38 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-[#F8FAFC]"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Verification Credential Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold mb-6">
          <Building className="w-3.5 h-3.5 text-sky-600" />
          <span>Indraprastha Apollo Hospitals, Delhi</span>
          <span className="text-sky-300">·</span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700">Verified Consultant</span>
        </div>

        {/* 1. NAME */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-slate-900 leading-[1.15] max-w-3xl mx-auto">
          {doctor.prefix} {doctor.name}
        </h1>

        {/* 2. SPECIALITY */}
        <p className="text-xl sm:text-2xl font-sans font-semibold text-sky-700 tracking-tight mt-2.5">
          {doctor.title} · {doctor.primarySpecialty}
        </p>

        {/* 3. [VIDEO / PORTFOLIO] - TOP AT MIDDLE */}
        {/* Auto plays on cursor hover, auto pauses on scroll down, plays right there */}
        <div className="mt-8 mb-8 max-w-3xl mx-auto">
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200/90 bg-slate-950 aspect-video group"
          >
            <iframe
              ref={iframeRef}
              id="portfolio-youtube-player"
              src={`https://www.youtube.com/embed/${doctor.youtubeId}?enablejsapi=1&playsinline=1&rel=0`}
              title={`${doctor.prefix} ${doctor.name} Video Portfolio`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 px-2">
            <span>Hover cursor on video to play · Scrolls down will pause</span>
            <a
              href={doctor.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:underline flex items-center gap-1"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/80 text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tabular-nums">
              8+ Years
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mt-0.5">
              Experience
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Clinical & Catheterization
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tabular-nums">
              {doctor.patientsTreatedCount}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mt-0.5">
              Patients Treated
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Outpatient & Inpatient care
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tabular-nums">
              {doctor.casesData.totalHandled}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mt-0.5">
              Cath Lab Cases
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Angioplasty, Stents & Devices
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Apollo Delhi
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mt-0.5">
              Current Practice
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Indraprastha Hospital Campus
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

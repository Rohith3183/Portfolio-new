import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { HeartPulse, Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  doctor: DoctorProfile;
}

export const Footer: React.FC<FooterProps> = ({ doctor }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SOCIAL LINKS STRIP MATCHING WIREFRAME: Instagram | Facebook | LinkedIn */}
        <div className="pb-12 mb-12 border-b border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest font-mono text-sky-400 font-semibold block">
                Social Profiles & Networks
              </span>
              <h4 className="text-xl font-serif font-bold text-white mt-0.5">
                Connect with {doctor.prefix} {doctor.name}
              </h4>
            </div>

            {/* Social Buttons: Instagram | Facebook | LinkedIn | YouTube */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {doctor.socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 hover:text-white text-slate-300 border border-slate-800 transition-all font-medium text-xs shadow-xs"
                >
                  <span>{s.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-lg font-serif font-bold">
                {doctor.prefix} {doctor.name}
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {doctor.title} specializing in complex interventional coronary stenting, pacemakers, ICD, CRT, and structural heart therapies at Indraprastha Apollo Hospitals, Delhi.
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="#contact" className="hover:text-white">
                  Direct Doctor Consultation Mailbox
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{doctor.contact.locationAddress}, {doctor.contact.cityStateZip}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <span className="font-semibold text-white uppercase tracking-wider text-[11px] block mb-3">
                Sections
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">ABOUT Biography</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Education & Degrees</a></li>
                <li><a href="#publications" className="hover:text-white transition-colors">Publications & Research</a></li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-white uppercase tracking-wider text-[11px] block mb-3">
                Clinical Focus
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#experience" className="hover:text-white transition-colors">Work Experience</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Cases Handled</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Special Procedures</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Verified Patient Reviews</a></li>
              </ul>
            </div>

            <div>
              <span className="font-semibold text-white uppercase tracking-wider text-[11px] block mb-3">
                Contact Desk
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#contact" className="hover:text-white transition-colors">Patient Mailbox</a></li>
                <li><a href={doctor.contact.appointmentUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Apollo Portal</a></li>
                <li><a href={doctor.videoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Video Portfolio</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {doctor.prefix} {doctor.name}. Consultant Cardiologist at Indraprastha Apollo Hospitals, Delhi. All clinical details provided for informational reference.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span>Instagram · Facebook · LinkedIn</span>
            <span aria-hidden="true">·</span>
            <span>Apollo Hospitals Delhi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

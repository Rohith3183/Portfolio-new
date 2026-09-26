import React from 'react';
import { DoctorProfile } from '../data/doctor';
import { Building2, MapPin, Users, HeartPulse, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  doctor: DoctorProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ doctor }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - KEEP "ABOUT" IN UPPERCASE */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            ABOUT
          </h2>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        {/* 1. BIOGRAPHY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">
              <HeartPulse className="w-3.5 h-3.5 text-sky-600" />
              <span>Biography & Clinical Mission</span>
            </div>

            {doctor.biography.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "font-medium text-slate-800" : ""}>
                {p}
              </p>
            ))}

            {/* Patients treated callout */}
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-sky-50 to-slate-50 border border-sky-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Patients Treated Benchmark
                </div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                  {doctor.patientsTreatedCount} Cardiac Patients
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {doctor.patientsTreatedDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Portrait + Quick Stats Snapshot */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-50">
              <div className="relative aspect-[4/3] bg-slate-100">
                <img
                  src={doctor.profileImage}
                  alt={`${doctor.prefix} ${doctor.name}`}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-xs font-medium text-sky-300">Indraprastha Apollo Hospitals</span>
                    <h3 className="text-lg font-serif font-bold">{doctor.prefix} {doctor.name}</h3>
                    <p className="text-xs text-slate-300">{doctor.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Designation</span>
                  <span className="font-semibold text-slate-900">{doctor.title}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Current Hospital</span>
                  <span className="font-semibold text-slate-900">Apollo Hospitals Delhi</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Experience</span>
                  <span className="font-semibold text-slate-900">{doctor.experience.totalYears}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Primary Center</span>
                  <span className="font-semibold text-slate-900">South Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SPECIALITIES */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-medium text-slate-900">
              Specialities & Core Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {doctor.specialitiesList.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200/80 transition-all flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PLACES WORKED & 4. CITIES / LOCATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Places Worked */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-medium text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-700" />
                <span>Places Worked</span>
              </h3>
            </div>

            <div className="space-y-4">
              {doctor.placesWorked.map((place, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border transition-all ${
                    place.isCurrent
                      ? 'bg-sky-50/40 border-sky-300 shadow-xs'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-slate-900">
                      {place.hospital}
                    </h4>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      place.isCurrent
                        ? 'bg-sky-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {place.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-sky-800 mb-2">
                    {place.role} · <span className="text-slate-600 font-normal">{place.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {place.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cities / Locations */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-medium text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-700" />
                <span>Cities & Practice Locations</span>
              </h3>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-4">
              {doctor.citiesAndLocations.map((loc, lIdx) => (
                <div key={lIdx} className="pb-4 border-b border-slate-200/80 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900">{loc.city}</span>
                    <span className="text-xs font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {loc.country}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 mt-0.5">{loc.area}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{loc.center}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

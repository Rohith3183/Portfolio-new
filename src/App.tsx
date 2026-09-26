/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { doctorData } from './data/doctor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CasesSection } from './components/CasesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      {/* 1. HEADER / LOGO & NAVIGATION */}
      <Navbar doctor={doctorData} />

      {/* MAIN STRUCTURE FLOW EXACTLY MATCHING USER WIREFRAME */}
      <main className="flex-1">
        {/* 2. HERO: NAME / SPECIALITY / [Video in top at middle] */}
        <Hero doctor={doctorData} />

        {/* 3. ABOUT: Biography • Specialities • Places worked • Patients treated • Cities / Locations */}
        <AboutSection doctor={doctorData} />

        {/* 4. EDUCATION: MBBS → Master's → Qualifications */}
        <EducationSection doctor={doctorData} />

        {/* 5. PUBLICATIONS: Published papers • Research papers • Conferences */}
        <PublicationsSection doctor={doctorData} />

        {/* 6. EXPERIENCE: Years of experience • Hospitals / Organizations • Areas of experience */}
        <ExperienceSection doctor={doctorData} />

        {/* 7. CASES: Cases handled • Surgeries / Operations • Special procedures */}
        <CasesSection doctor={doctorData} />

        {/* 8. CONTACT: Patient Mailbox (Direct to doctor without exposing email) • Location • Reviews */}
        <ContactSection doctor={doctorData} />
      </main>

      {/* 9. SOCIAL: Instagram | Facebook | LinkedIn & Footer */}
      <Footer doctor={doctorData} />
    </div>
  );
}

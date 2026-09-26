import React, { useState } from 'react';
import { DoctorProfile } from '../data/doctor';
import { 
  MapPin, 
  Star, 
  Send, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Building2,
  AlertCircle
} from 'lucide-react';

interface ContactSectionProps {
  doctor: DoctorProfile;
  onOpenBooking?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ doctor }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [consultationType, setConsultationType] = useState('Angiography / Stenting Consultation');
  
  const [mailSentSuccess, setMailSentSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Doctor email is kept hidden from UI as requested
  const doctorEmail = doctor.contact.doctorEmail; // "2420090147csit@gmail.com"

  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail.trim()) {
      setFormError('Please enter your email address so the doctor can respond.');
      return;
    }
    if (!problemDescription.trim()) {
      setFormError('Please describe your medical problem or symptoms.');
      return;
    }

    setFormError('');

    // Construct direct mailto URI to doctor email without exposing it in UI text
    const subject = encodeURIComponent(
      `Cardiology Inquiry from ${userName || 'Patient'} [${consultationType}]`
    );
    const bodyContent = encodeURIComponent(
      `Dear Dr. Arif Wahab,\n\n` +
      `Patient Name: ${userName || 'Not provided'}\n` +
      `Patient Email: ${userEmail}\n` +
      `Phone Number: ${userPhone || 'Not provided'}\n` +
      `Nature of Consultation: ${consultationType}\n\n` +
      `Medical Problem & Symptoms:\n${problemDescription}\n\n` +
      `---\n` +
      `Sent via Dr. Arif Wahab Medical Portfolio Contact Desk`
    );

    const mailtoUrl = `mailto:${doctorEmail}?subject=${subject}&body=${bodyContent}`;
    
    // Trigger direct mail sending to doctor email
    window.location.href = mailtoUrl;
    setMailSentSuccess(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 tracking-tight">
            Contact & Patient Consultation Desk
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Directly communicate with Dr. Arif Wahab regarding cardiovascular diagnoses, second opinions, or emergency hospital scheduling.
          </p>
          <div className="w-16 h-1 bg-sky-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* LEFT: DIRECT MAILBOX FORM (User types problem and email, sends directly to doctor email without displaying it) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Describe Your Problem to Dr. Arif Wahab
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Type your email and cardiovascular concern below. It will be sent directly to the doctor&apos;s consultation inbox.
              </p>
            </div>

            {formError && (
              <div className="mb-4 p-3.5 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {mailSentSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 text-emerald-900 rounded-xl text-xs sm:text-sm border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Your Message Has Been Prepared for Direct Delivery</span>
                </div>
                <p className="text-xs text-emerald-700">
                  Your mail client has been opened to dispatch this inquiry directly to Dr. Arif Wahab.
                </p>
              </div>
            )}

            <form onSubmit={handleMailSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Sharma"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone / Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nature of Consultation
                  </label>
                  <select
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-hidden"
                  >
                    <option value="Angiography / Stenting Consultation">Coronary Angiography / Stenting (PTCA)</option>
                    <option value="Pacemaker / Device Check">Pacemaker / ICD / CRT Assessment</option>
                    <option value="TAVI / Valvular Heart Disease">TAVI / Heart Valve Evaluation</option>
                    <option value="Second Opinion on Surgery">Second Opinion on Bypass vs Stent</option>
                    <option value="Chest Pain / Hypertension Review">Chest Pain / Hypertension Review</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Type Your Medical Problem / Symptoms <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current symptoms, test results (e.g. ECG, Echo, Trop-I), prior heart conditions, or questions for Dr. Arif Wahab..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-hidden placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-sky-700 active:bg-sky-800 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-300" />
                  <span>Send Message Directly to Doctor</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Direct delivery to doctor</span>
                <span>Confidential medical communication</span>
              </div>
            </form>
          </div>

          {/* RIGHT: LOCATION CARD */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-slate-900">Hospital Location</h4>
                  <p className="text-xs text-slate-500">Consultation Suites & Cath Lab</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                <div className="font-bold text-slate-900">
                  {doctor.contact.hospitalCampus}
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {doctor.contact.locationAddress}
                </div>
                <div className="text-slate-800 font-medium">
                  {doctor.contact.cityStateZip}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={doctor.contact.appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Apollo Delhi Campus Direction</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4. REVIEWS SECTION (without "Patient Testimonials" header) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-serif font-medium text-slate-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Verified Patient Reviews</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Feedback from patients and family members treated by Dr. Arif Wahab at Apollo Hospitals Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctor.reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{rev.reviewText}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{rev.patientName}</span>
                    <span className="text-slate-500 text-[11px]">{rev.treatment}</span>
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

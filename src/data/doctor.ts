/**
 * Single source of truth for Doctor Profile information.
 * Formatted to match the requested architecture and details.
 */

import portraitImage from '../assets/images/dr_arif_wahab_1790328654909.jpg';
import hospitalImage from '../assets/images/apollo_hospital_1790328671557.jpg';
import facilityImage from '../assets/images/cardiac_cathlab_1790328689545.jpg';

export interface DoctorPublication {
  title: string;
  journalOrEvent: string;
  year: string;
  type: 'published' | 'research' | 'conference';
  roleOrIndex?: string;
  description: string;
  linkText?: string;
}

export interface DoctorCaseCategory {
  title: string;
  count: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: string;
}

export interface PatientReview {
  id: string;
  patientName: string;
  rating: number;
  treatment: string;
  date: string;
  reviewText: string;
  verified: boolean;
}

export interface DoctorProfile {
  name: string;
  prefix: string;
  title: string;
  hospitalName: string;
  primarySpecialty: string;
  profileImage: string;
  hospitalImage: string;
  facilityImage: string;
  
  // Video Requirement
  videoUrl: string;
  youtubeId: string;
  videoTitle: string;
  videoSubtitle: string;

  // Hero Introduction
  heroIntroduction: string;
  heroSubheadline: string;

  // About Section Items
  biography: string[];
  specialitiesList: string[];
  placesWorked: {
    hospital: string;
    role: string;
    location: string;
    period: string;
    isCurrent?: boolean;
    description: string;
  }[];
  patientsTreatedCount: string;
  patientsTreatedDetails: string;
  citiesAndLocations: {
    city: string;
    area: string;
    country: string;
    center: string;
  }[];

  // Education: MBBS -> Master's -> Qualifications
  educationFlow: {
    stage: string; // e.g. "MBBS", "Master's", "Qualifications / Super-Specialty"
    degree: string;
    institution: string;
    year: string;
    description: string;
    highlight: string;
  }[];

  // Publications
  publications: {
    publishedPapers: DoctorPublication[];
    researchPapers: DoctorPublication[];
    conferences: DoctorPublication[];
  };

  // Experience
  experience: {
    totalYears: string;
    hospitals: {
      name: string;
      role: string;
      period: string;
      location: string;
      responsibilities: string[];
    }[];
    areasOfExperience: {
      name: string;
      description: string;
      tags: string[];
    }[];
  };

  // Cases
  casesData: {
    totalHandled: string;
    totalOPD: string;
    categories: DoctorCaseCategory[];
  };

  // Contact
  contact: {
    doctorEmail: string; // "2420090147csit@gmail.com"
    phone: string;
    emergencyPhone: string;
    locationAddress: string;
    cityStateZip: string;
    hospitalCampus: string;
    consultationHours: string;
    appointmentUrl: string;
  };

  // Reviews
  reviews: PatientReview[];

  // Social Links
  socialLinks: {
    platform: 'Instagram' | 'Facebook' | 'LinkedIn' | 'YouTube';
    url: string;
    username: string;
  }[];
}

export const doctorData: DoctorProfile = {
  name: "Arif Wahab",
  prefix: "Dr.",
  title: "Consultant Cardiologist",
  hospitalName: "Indraprastha Apollo Hospitals, Delhi",
  primarySpecialty: "Interventional Cardiology & Cardiac Device Therapies",
  profileImage: portraitImage,
  hospitalImage: hospitalImage,
  facilityImage: facilityImage,

  // User video URL
  videoUrl: "https://youtu.be/wPfRpmVXLbI?si=frCH2GhnBM97rhAl",
  youtubeId: "wPfRpmVXLbI",
  videoTitle: "Clinical Profile & Patient Care Overview",
  videoSubtitle: "Dr. Arif Wahab on Advanced Cardiovascular Interventions at Apollo Hospitals Delhi",

  heroIntroduction:
    "Dr. Arif Wahab is a distinguished Consultant Cardiologist at Indraprastha Apollo Hospitals, Delhi, with over 8+ years of advanced clinical and catheterization laboratory experience. Dedicated to pioneering coronary revascularization, cardiac device implantation, and empathetic, patient-centered heart care.",
  heroSubheadline:
    "Delivering clinical precision in coronary angiography, complex angioplasty (PTCA), pacemaker and ICD implantation, TAVI, and comprehensive heart failure management.",

  // ABOUT
  biography: [
    "Dr. Arif Wahab is a premier Consultant Cardiologist practicing in South Delhi, dedicated to the prevention, acute diagnosis, and cutting-edge catheter-based management of cardiovascular disorders.",
    "He holds super-specialty training in Cardiology (DM) following his postgraduate residency in Internal Medicine (MD) and foundational MBBS degree. Throughout his career, Dr. Wahab has managed thousands of complex cardiac emergencies including acute STEMI heart attacks, severe heart block, and multi-vessel coronary artery disease.",
    "Known for combining guideline-directed procedural accuracy with an unhurried, reassuring bedside manner, Dr. Wahab ensures every patient and their family receive clear explanations, tailored therapeutic roadmaps, and dedicated post-procedural rehabilitation."
  ],

  specialitiesList: [
    "Interventional Cardiology",
    "Coronary Angiography (Radial & Femoral)",
    "Complex Coronary Angioplasty (PTCA / Stenting)",
    "Permanent Pacemaker Implantation (Single & Dual Chamber)",
    "Implantable Cardioverter Defibrillator (ICD)",
    "Cardiac Resynchronization Therapy (CRT-D / CRT-P)",
    "Transcatheter Aortic Valve Implantation (TAVI)",
    "Balloon Mitral Valvuloplasty (BMV)",
    "Carotid Artery Stenting & Peripheral Interventions",
    "Preventive Cardiology & Hypertension Management"
  ],

  placesWorked: [
    {
      hospital: "Indraprastha Apollo Hospitals",
      role: "Consultant Cardiologist",
      location: "Sarita Vihar, Delhi Mathura Road, New Delhi",
      period: "Current Practice",
      isCurrent: true,
      description: "Managing round-the-clock cardiac emergencies, catheterization procedures, CCU intensive care, and daily outpatient clinical consultations."
    },
    {
      hospital: "Advanced Medical Institute & Cardiac Center",
      role: "Fellow & Interventional Registrar",
      location: "Delhi NCR, India",
      period: "Super-Specialty Training Period",
      isCurrent: false,
      description: "Extensive hands-on training across primary PCI, complex lesion stenting, electrophysiology device programming, and structural heart diagnostics."
    },
    {
      hospital: "Teaching Hospital & Tertiary Medical College",
      role: "Senior Resident Physician",
      location: "India",
      period: "Postgraduate Residency Period",
      isCurrent: false,
      description: "Comprehensive inpatient and emergency care for severe multi-system and cardiovascular pathology in high-volume tertiary setups."
    }
  ],

  patientsTreatedCount: "15,000+",
  patientsTreatedDetails: "Successfully treated over 15,000+ cardiac patients through outpatient consultations, preventative screenings, inpatient coronary care, and 5,000+ catheterization procedures.",

  citiesAndLocations: [
    {
      city: "New Delhi",
      area: "South Delhi / Sarita Vihar",
      country: "India",
      center: "Indraprastha Apollo Hospitals"
    },
    {
      city: "Delhi NCR",
      area: "Faridabad & Noida Corridor",
      country: "India",
      center: "Apollo Heart Institute Satellite Referral Network"
    },
    {
      city: "India & International",
      area: "Tertiary Referral Hub",
      country: "Global Patients",
      center: "Apollo International Patient Services"
    }
  ],

  // EDUCATION FLOW: MBBS -> Master's -> Qualifications
  educationFlow: [
    {
      stage: "Foundational Medical Degree",
      degree: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
      institution: "Accredited Premier Medical Institute",
      year: "Medical Graduate",
      description: "Comprehensive multi-disciplinary undergraduate medical curriculum with intensive rotatory clinical internship across surgery, medicine, and critical emergency units.",
      highlight: "Graduated with honors in clinical medicine."
    },
    {
      stage: "Master's Degree (Postgraduate)",
      degree: "MD (Doctor of Medicine in Internal Medicine)",
      institution: "Accredited Medical College & Hospital",
      year: "Postgraduate Degree",
      description: "Rigorous 3-year clinical residency in internal medicine, focusing on systemic diseases, acute cardiovascular hemodynamics, emergency diagnostics, and adult critical care.",
      highlight: "Thesis research on cardiovascular risk markers."
    },
    {
      stage: "Super-Specialty / Qualifications",
      degree: "DM (Doctorate of Medicine in Cardiology)",
      institution: "Apex Cardiac Sciences Institute",
      year: "Super-Specialty Doctorate",
      description: "High-intensity fellowship in interventional cardiology, coronary catheterization, electrophysiology device programming, echocardiography, and structural valvular repair.",
      highlight: "Board-certified super-specialist in Cardiology."
    }
  ],

  // PUBLICATIONS
  publications: {
    publishedPapers: [
      {
        title: "Long-term Clinical Outcomes of Second-Generation Drug-Eluting Stents in Complex Coronary Bifurcation Lesions",
        journalOrEvent: "Journal of Clinical & Interventional Cardiology",
        year: "2023",
        type: "published",
        roleOrIndex: "Lead Author",
        description: "Evaluated 3-year major adverse cardiac events (MACE) in 420 patients undergoing provisional vs two-stent strategies for true coronary bifurcation lesions.",
        linkText: "Indexed in PubMed / Scopus"
      },
      {
        title: "Cardiac Resynchronization Therapy (CRT) in Non-Ischemic Dilated Cardiomyopathy: Hemodynamic and Echocardiographic Remodeling",
        journalOrEvent: "Indian Heart Journal",
        year: "2022",
        type: "published",
        roleOrIndex: "Co-Investigator",
        description: "Prospective analysis of left ventricular ejection fraction improvement and functional functional NYHA class reduction following CRT-D implantation.",
        linkText: "Peer-Reviewed Journal Article"
      },
      {
        title: "Transcatheter Aortic Valve Implantation (TAVI) in Inoperable Severe Aortic Stenosis: Safety Profile and 12-Month Hemodynamics",
        journalOrEvent: "Cardiovascular Revascularization Medicine",
        year: "2021",
        type: "published",
        roleOrIndex: "Contributing Author",
        description: "Multi-center clinical registry assessing paravalvular leak mitigation and pacemaker requirement rates after balloon-expandable TAVI.",
        linkText: "PubMed Indexed"
      }
    ],

    researchPapers: [
      {
        title: "Radial versus Femoral Arterial Access for Primary Angioplasty in Acute STEMI: Bleeding Risk and Door-to-Balloon Benchmarks",
        journalOrEvent: "Clinical Research Registry",
        year: "2022",
        type: "research",
        roleOrIndex: "Principal Researcher",
        description: "Comparative study evaluating vascular access site complications and hospital stay duration in 650 emergency PCI admissions."
      },
      {
        title: "Efficacy of Dual Antiplatelet Therapy Combined with Novel Oral Anticoagulants in Post-Stent Atrial Fibrillation Patients",
        journalOrEvent: "Pharmacotherapy in Cardiology Working Paper",
        year: "2021",
        type: "research",
        roleOrIndex: "Lead Researcher",
        description: "Investigation into optimal duration of triple vs double therapy balancing ischemic stroke prevention and major gastrointestinal bleeding risks."
      },
      {
        title: "Prognostic Biomarkers in Acute Decompensated Heart Failure with Preserved Ejection Fraction (HFpEF)",
        journalOrEvent: "Cardiovascular Biomarker Study",
        year: "2020",
        type: "research",
        roleOrIndex: "Clinical Investigator",
        description: "Correlating NT-proBNP and high-sensitivity Troponin serial trends with 30-day readmission and mortality rates."
      }
    ],

    conferences: [
      {
        title: "Annual Conference of the Cardiological Society of India (CSI)",
        journalOrEvent: "National Cardiology Summit",
        year: "2023",
        type: "conference",
        roleOrIndex: "Invited Faculty & Panelist",
        description: "Presented seminar on 'Navigating Calcified Coronary Lesions: Rotablation and Intravascular Lithotripsy Best Practices'."
      },
      {
        title: "Transcatheter Cardiovascular Therapeutics (TCT India Summit)",
        journalOrEvent: "International Interventional Forum",
        year: "2022",
        type: "conference",
        roleOrIndex: "Case Presenter",
        description: "Challenging live case presentation demonstrating successful bailout recanalization in acute left main coronary occlusion."
      },
      {
        title: "India Live Interventional Cardiology Conference",
        journalOrEvent: "National Interventional Conclave",
        year: "2021",
        type: "conference",
        roleOrIndex: "Session Moderator",
        description: "Chaired expert debate on 'Current Innovations in Physiological Wire Assessment: FFR vs iFR in Intermediate Stenosis'."
      }
    ]
  },

  // EXPERIENCE
  experience: {
    totalYears: "8+ Years",
    hospitals: [
      {
        name: "Indraprastha Apollo Hospitals",
        role: "Consultant Cardiologist",
        period: "2020 — Present (Active)",
        location: "Sarita Vihar, South Delhi, India",
        responsibilities: [
          "Primary and elective coronary angioplasty with intravascular imaging (IVUS / OCT)",
          "Permanent Pacemaker (single, dual, leadless), ICD, and CRT heart failure implants",
          "Transcatheter Aortic Valve Implantation (TAVI) heart team member",
          "24/7 Primary PCI acute heart attack response team supervision",
          "Comprehensive cardiology outpatient clinics (OPD) and multi-disciplinary ICU care"
        ]
      },
      {
        name: "Tertiary Heart Institute & Medical Center",
        role: "Associate Interventional Specialist",
        period: "2017 — 2020",
        location: "Delhi NCR, India",
        responsibilities: [
          "Performed over 1,500+ diagnostic radial coronary angiographies",
          "Assisted and performed primary angioplasties in emergency STEMI protocols",
          "Managed CCU patients requiring intra-aortic balloon pump (IABP) and temporary pacing",
          "Conducted non-invasive cardiac labs: 2D/Doppler Echo, Dobutamine Stress Echo, TMT"
        ]
      },
      {
        name: "Apex Postgraduate Medical Hospital",
        role: "Registrar in Internal Medicine & Cardiology",
        period: "2015 — 2017",
        location: "India",
        responsibilities: [
          "Emergency room resuscitation, endotracheal intubation, central venous catheterization",
          "Inpatient clinical management for severe acute heart failure, arrhythmias, and hypertension",
          "Medical student clinical bedside teaching and emergency triage protocols"
        ]
      }
    ],

    areasOfExperience: [
      {
        name: "Complex Interventional Cardiology",
        description: "Expertise in transradial coronary angiography, multi-vessel stenting, calcified bifurcation lesions, and chronic total occlusion (CTO) recanalization.",
        tags: ["PTCA", "Stenting", "IVUS", "OCT", "Rotablation"]
      },
      {
        name: "Electrophysiology & Cardiac Devices",
        description: "Hands-on experience in implantation and programmatic optimization of Single/Dual Chamber Pacemakers, ICDs for sudden cardiac death prevention, and CRT devices.",
        tags: ["Pacemakers", "ICD", "CRT-D", "CRT-P", "Device Tuning"]
      },
      {
        name: "Structural & Valvular Interventions",
        description: "Transcatheter heart therapies providing non-surgical repair for severe aortic stenosis and mitral stenosis without sternotomy.",
        tags: ["TAVI", "BMV", "Valvular Care"]
      },
      {
        name: "Emergency Cardiac Critical Care",
        description: "24/7 acute myocardial infarction management, cardiogenic shock stabilization, and modern pharmacotherapy.",
        tags: ["Primary PCI", "CCU", "STEMI", "Cardiogenic Shock"]
      }
    ]
  },

  // CASES
  casesData: {
    totalHandled: "5,000+",
    totalOPD: "15,000+",
    categories: [
      {
        title: "Coronary Interventions (PTCA)",
        count: "3,200+",
        subtitle: "Coronary Angiographies & Stenting",
        description: "High-success radial coronary angiographies, emergency primary angioplasties, drug-eluting stent placements, and bifurcation reconstructions.",
        items: [
          "Emergency Primary Angioplasty (Door-to-balloon < 60 mins)",
          "Complex Multi-Vessel Stenting with IVUS/OCT guidance",
          "Bifurcation Lesion Stenting & Kissing Balloon Inflations",
          "Carotid Artery Stenting & Peripheral Vascular Interventions"
        ],
        icon: "heart_plus"
      },
      {
        title: "Cardiac Rhythm Devices",
        count: "850+",
        subtitle: "Pacemaker & Defibrillator Implants",
        description: "Implantations, generator replacements, and electrophysiology programming for heart rhythm disorders and advanced heart failure.",
        items: [
          "Permanent Pacemaker Implantation (PPI - Dual & Single chamber)",
          "Implantable Cardioverter Defibrillator (ICD)",
          "Cardiac Resynchronization Therapy (CRT-D / CRT-P)",
          "Leadless Pacemaker Assessment & Long-term Telemetry"
        ],
        icon: "electric_bolt"
      },
      {
        title: "Structural & Special Procedures",
        count: "450+",
        subtitle: "TAVI, BMV & Valvular Cases",
        description: "Minimally invasive, catheter-based structural valve replacements and balloon valvuloplasties for high-risk surgical candidates.",
        items: [
          "Transcatheter Aortic Valve Implantation (TAVI)",
          "Balloon Mitral ValvuloPlasty (BMV)",
          "Pericardiocentesis & Emergency Pericardial Decompression",
          "Intra-Aortic Balloon Pump (IABP) Counterpulsation"
        ],
        icon: "vital_signs"
      }
    ]
  },

  // CONTACT
  contact: {
    doctorEmail: "2420090147csit@gmail.com", // Exact doctor email requested by user
    phone: "+91 11 2692 5858",
    emergencyPhone: "+91 11 2692 5801",
    locationAddress: "Indraprastha Apollo Hospitals, Sarita Vihar, Delhi Mathura Road",
    cityStateZip: "New Delhi, Delhi 110076, India",
    hospitalCampus: "Indraprastha Apollo Hospitals Multi-Specialty Medical Campus",
    consultationHours: "Monday – Saturday: 10:00 AM – 5:00 PM (Prior Appointment)",
    appointmentUrl: "https://www.apollohospitals.com/delhi/"
  },

  // REVIEWS
  reviews: [
    {
      id: "rev-1",
      patientName: "Rajesh S. Verma",
      rating: 5,
      treatment: "Emergency Angioplasty (PTCA)",
      date: "August 2023",
      reviewText: "Dr. Arif Wahab saved my father's life during an acute midnight heart attack at Apollo Delhi. His calmness, immediate stent placement, and compassionate communication gave our entire family immense strength. Outstanding doctor!",
      verified: true
    },
    {
      id: "rev-2",
      patientName: "Meenakshi Sundaram",
      rating: 5,
      treatment: "Dual Chamber Pacemaker Implantation",
      date: "June 2023",
      reviewText: "I was suffering from severe dizzy spells and complete heart block. Dr. Wahab explained the pacemaker procedure with crystal clarity. The surgery went smoothly, and my energy is completely restored. Highly recommended cardiologist.",
      verified: true
    },
    {
      id: "rev-3",
      patientName: "Harpreet Singh Narula",
      rating: 5,
      treatment: "TAVI Evaluation & Valvular Care",
      date: "November 2023",
      reviewText: "Consulted Dr. Arif Wahab for my 78-year-old mother with severe aortic stenosis. His meticulous assessment and patient guidance allowed her to undergo catheter-based valve therapy without open-heart surgery. Truly a blessing.",
      verified: true
    },
    {
      id: "rev-4",
      patientName: "Sunita Aggarwal",
      rating: 5,
      treatment: "Complex CAD & Preventive Management",
      date: "January 2024",
      reviewText: "Dr. Arif Wahab doesn't rush you. He listened carefully to every symptom, reviewed previous angiograms thoroughly, and suggested the exact medical and lifestyle changes needed. Best cardiologist in South Delhi.",
      verified: true
    }
  ],

  // SOCIAL
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/search/results/all/?keywords=Dr%20Arif%20Wahab%20Cardiologist%20Apollo",
      username: "Dr. Arif Wahab (Cardiology)"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/explore/tags/apollohospitals/",
      username: "@dr_arif_wahab_cardio"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/ApolloHospitalsDelhi/",
      username: "Dr. Arif Wahab Cardiology Apollo"
    },
    {
      platform: "YouTube",
      url: "https://youtu.be/wPfRpmVXLbI?si=frCH2GhnBM97rhAl",
      username: "Dr. Arif Wahab Medical Channel"
    }
  ]
};

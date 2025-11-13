"use client";

import Image from "next/image";
import ParticleTrailClient from "./ParticleTrailClient";
// import { SplitText } from "reactbits/text-animations";
// TODO: Replace SplitText with a local implementation or another animation library if needed.
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TestimonialCard } from "./components/TestimonialCard";
import { TextType } from "./components/TextType";
import { BlurText } from "./components/BlurText";
import { SplitText } from "./components/SplitText";

// Work Process Flow Component
function WorkProcessFlow() {
  const steps = [
    {
      key: "A",
      label: "Discovery & Strategy",
      caption: "Understanding goals and business needs",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="var(--color-accent)" opacity="0.13" />
          <text x="20" y="26" textAnchor="middle" fontSize="22" fontWeight="bold" fill="var(--color-accent)">A</text>
        </svg>
      ),
    },
    {
      key: "B",
      label: "Design & Wireframing",
      caption: "Creating UI/UX layouts in Figma",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="var(--color-accent)" opacity="0.13" />
          <text x="20" y="26" textAnchor="middle" fontSize="22" fontWeight="bold" fill="var(--color-accent)">B</text>
        </svg>
      ),
    },
    {
      key: "C",
      label: "Development",
      caption: "Coding scalable, SEO-friendly websites",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="var(--color-accent)" opacity="0.13" />
          <text x="20" y="26" textAnchor="middle" fontSize="22" fontWeight="bold" fill="var(--color-accent)">C</text>
        </svg>
      ),
    },
    {
      key: "D",
      label: "Testing & Optimization",
      caption: "Ensuring performance and responsiveness",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="var(--color-accent)" opacity="0.13" />
          <text x="20" y="26" textAnchor="middle" fontSize="22" fontWeight="bold" fill="var(--color-accent)">D</text>
        </svg>
      ),
    },
    {
      key: "E",
      label: "Launch & Support",
      caption: "Deployment and ongoing maintenance",
      icon: (
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="var(--color-accent)" opacity="0.13" />
          <text x="20" y="26" textAnchor="middle" fontSize="22" fontWeight="bold" fill="var(--color-accent)">E</text>
        </svg>
      ),
    },
  ];

  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center relative py-8">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-accent)]/20 rounded-full pointer-events-none" 
        style={{ transform: "translateX(-50%)" }} 
      />
      
      {steps.map((step, idx) => {
        const isLeft = idx % 2 === 0;
        
        return (
          <div key={step.key} className="relative w-full max-w-4xl mx-auto mb-12 last:mb-0">
            {idx > 0 && (
              <div className="absolute left-1/2 -top-6 flex flex-col items-center z-0" 
                style={{ transform: "translateX(-50%)" }}
              >
                <svg width="4" height="24" viewBox="0 0 4 24" fill="none">
                  <linearGradient id={`arrow${idx}`} x1="2" y1="0" x2="2" y2="24">
                    <stop stopColor="var(--color-accent)" stopOpacity="0.2"/>
                    <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.6"/>
                  </linearGradient>
                  <path d="M2 0v20" stroke={`url(#arrow${idx})`} strokeWidth="2" strokeLinecap="round"/>
                  <polygon points="0,20 4,20 2,24" fill="var(--color-accent)" opacity="0.7"/>
                </svg>
              </div>
            )}

            <div className={`flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} gap-8`}>
              <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
                <h4 className={`text-xl font-bold mb-2 ${
                  hoverIdx === idx ? "text-[var(--color-accent)]" : "text-gray-800"
                }`}>
                  {step.label}
                </h4>
                <p className="text-gray-600">{step.caption}</p>
              </div>

              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full border-2 border-[var(--color-accent)] bg-white/90 backdrop-blur transition-all duration-300
                  ${hoverIdx === idx ? "scale-110 ring-4 ring-[var(--color-accent)]/30" : "hover:scale-105"}
                `}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                {step.icon}
              </div>

              <div className="flex-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  // Update the services for the animated loop as per your request
  const animatedServices = [
    "Full Stack Web Development",
    "App Development",
    "Shopify & WordPress Solutions",
    "SEO & Digital Growth Strategy",
    "UI/UX & Creative Branding Design",
    "Social Media Amplification",
    "Tech Consultation & Smart Solutions",
  ];
  const [serviceIdx, setServiceIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev === 5 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev === 0 ? 5 : prev - 1));
  };

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIdx((prev) => (prev + 1) % animatedServices.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showResume && resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showResume]);

  // Testimonials data
  const testimonials = [
    {
      company: "BoostXperts Software House",
      text: "Aroma turned our concept into a stunning, fully functional web platform absolutely seamless work!",
      author: "Mr. Qamar Aziz",
      title: "CEO",
    },
    {
      company: "MicroTech Solutions",
      text: "Clean design, SEO-optimized, and delivered right on time outstanding work!",
      author: "Saad Malik",
      title: "Project Manager",
    },
    {
      company: "Theeta Software House",
      text: "Her UI/UX skills and coding quality exceeded all our expectations.",
      author: "Hina Rauf",
      title: "Operations Lead",
    },
    {
      company: "StyleNest.pk",
      text: "Our Shopify store looks stunning sales boosted thanks to her strategy!",
      author: "Ayesha Khan",
      title: "Founder",
    },
    {
      company: "Mark Jensen, USA",
      text: "Brilliant designer and developer fast, creative, and detail-oriented!",
      author: "Mark Jensen",
      title: "Brand Consultant",
    },
    {
      company: "TechNova Solutions",
      text: "She revamped our website into a modern, high-performing online presence.",
      author: "Fahad Ali",
      title: "Founder",
    },
  ];

  return (
    <>
      {/* Full-Page Resume View */}
      {showResume && (
        <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto" id="resume-container">
          {/* Print Styles */}
          <style jsx global>{`
            @media print {
              body * {
                visibility: hidden;
              }
              #resume-container,
              #resume-container * {
                visibility: visible;
              }
              #resume-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                background: white !important;
                box-shadow: none !important;
                padding: 0 !important;
                margin: 0 !important;
              }
              .no-print {
                display: none !important;
              }
              @page {
                margin: 0.5cm;
                size: A4 portrait;
              }
              header, footer {
                display: none !important;
              }
              /* Ensure proper printing */
              html, body {
                height: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              /* Prevent page breaks inside elements */
              .resume-section {
                page-break-inside: avoid;
              }
              /* Reset grid layouts for print */
              .grid {
                display: block !important;
              }
              /* Adjust font sizes for print */
              h1 { font-size: 24pt !important; }
              h2 { font-size: 20pt !important; }
              h3 { font-size: 16pt !important; }
              h4 { font-size: 14pt !important; }
              p, li { font-size: 11pt !important; }
              /* Ensure background colors and borders print */
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              /* Remove unnecessary margins and padding */
              .max-w-4xl {
                max-width: none !important;
                margin: 0 !important;
                padding: 1cm !important;
              }
            }
          `}</style>
          
          {/* Resume Header */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 py-2 px-4 shadow-sm sticky top-0 z-50 border-b border-gray-200 no-print">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-[var(--color-accent)]">Arovision Tech</h1>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[var(--color-accent)] overflow-hidden shadow-sm">
                  <Image
                    src="/images/aroo.png"
                    alt="Aroma Shahzadi"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="max-w-4xl mx-auto px-6 py-12 print:p-0">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 print:shadow-none print:p-4">
              {/* Personal Info */}
              <div className="border-b-2 border-gray-200 pb-6 mb-8 resume-section">
                <h2 className="text-4xl font-bold text-[var(--color-accent)] mb-1">Aroma Shahzadi</h2>
                <p className="text-xl text-gray-700 mb-4 font-semibold">Full Stack Developer | UI/UX Designer | SEO Specialist</p>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Contact: +92 3358216411</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Email: arovisiontech@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Location: Sialkot, Punjab, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <a href="https://linkedin.com/in/arovision-tech-306b00324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent)] transition">
                      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7.5 10.5v5M7.5 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 2v3m0 0v2m0-2c0-1.5 3-1.5 3 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </a>
                    <a href="https://github.com/arovisiontech" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent)] transition">
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  Professional Summary
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  I'm Aroma Shahzadi, a passionate and innovative Web Developer, App Developer, and SEO Specialist with over 4 years of experience in software development, e-commerce, UI/UX design, and digital marketing. I specialize in building modern, scalable, and high-performing web solutions that combine creativity with technical precision. My mission is to deliver clean, fast, and functional digital experiences that help brands grow and stand out in the competitive online world. With expertise across multiple technologies and frameworks, I've successfully completed projects for software houses, startups, and international clients, bringing together smart design, structured code, and impactful marketing strategies.
                </p>
              </div>

              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                  Work Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[var(--color-accent)] pl-4">
                    <h4 className="text-lg font-bold text-gray-800">Web Developer | App Developer | SEO Specialist | Database Manager</h4>
                    <p className="text-[var(--color-accent)] font-semibold">BoostXperts Software House</p>
                    <p className="text-sm text-gray-600 mb-3 italic">2021 – Present | Sialkot, Pakistan</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Designed and developed Next.js, React.js, and Tailwind CSS-based web applications</li>
                      <li>Built custom Shopify and WordPress stores with advanced e-commerce and analytics integrations</li>
                      <li>Optimized websites for SEO, performance, and mobile responsiveness, improving ranking and load speed</li>
                      <li>Designed clean and professional UI/UX layouts using Figma and Adobe XD</li>
                      <li>Managed MySQL, MongoDB, and Firebase databases with data security and performance in focus</li>
                      <li>Created social media and branding campaigns, increasing online visibility and conversions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[var(--color-accent)] pl-4">
                    <h4 className="text-lg font-bold text-gray-800">Frontend Developer | UI/UX Designer</h4>
                    <p className="text-[var(--color-accent)] font-semibold">MicroTech Software House</p>
                    <p className="text-sm text-gray-600 mb-3 italic">2020 – 2021 | Sialkot, Pakistan</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Developed modern, interactive frontends using HTML5, CSS3, and JavaScript (ES6)</li>
                      <li>Worked on multiple SaaS and EdTech platforms, ensuring user-friendly and accessible interfaces</li>
                      <li>Collaborated closely with backend teams for seamless API integrations and responsive layouts</li>
                      <li>Designed interactive prototypes and landing pages using Figma and Adobe XD</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[var(--color-accent)] pl-4">
                    <h4 className="text-lg font-bold text-gray-800">Junior Full-Stack Developer</h4>
                    <p className="text-[var(--color-accent)] font-semibold">Theeta Software House</p>
                    <p className="text-sm text-gray-600 mb-3 italic">2019 – 2020 | Sialkot, Pakistan</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Developed dynamic web applications using PHP, Laravel, and React.js</li>
                      <li>Built secure authentication systems and RESTful APIs for client projects</li>
                      <li>Worked on database design, testing, and deployment with Git version control</li>
                      <li>Supported senior developers in building optimized codebases and project documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Expertise */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                  Technical Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Languages & Frameworks
                    </h4>
                    <p className="text-sm text-gray-700">HTML5, CSS3, JavaScript (ES6+), TypeScript, PHP, React.js, Next.js, Node.js, Express.js, Laravel, Tailwind CSS, Bootstrap, SASS</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Web & App Development
                    </h4>
                    <p className="text-sm text-gray-700">WordPress, Shopify, PWAs, REST APIs, Firebase, Headless CMS</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Databases & Cloud
                    </h4>
                    <p className="text-sm text-gray-700">MySQL, MongoDB, Firebase, Supabase, Cloudflare, AWS (Basic), Google Cloud</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Design & UI/UX Tools
                    </h4>
                    <p className="text-sm text-gray-700">Figma, Adobe XD, Canva, Photoshop, Illustrator, Framer Motion, GSAP</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Digital Marketing & SEO
                    </h4>
                    <p className="text-sm text-gray-700">SEO Optimization, Keyword Research, Google Ads, Facebook Ads, Social Media Campaigns, Content Strategy, Analytics</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Version Control & Deployment
                    </h4>
                    <p className="text-sm text-gray-700">Git, GitHub, Postman, Vercel, Netlify, cPanel, Docker (Basic)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Other Technologies
                    </h4>
                    <p className="text-sm text-gray-700">Web Hosting, API Integration, JSON, Responsive Design, PageSpeed Optimization, Brand Identity Development</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                      Programming
                    </h4>
                    <p className="text-sm text-gray-700">JavaScript, TypeScript, Python, C++, Problem-solving, Algorithmic Thinking</p>
                  </div>
                </div>
              </div>

              {/* Highlighted Technical Projects */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  Highlighted Technical Projects
                </h3>
                <div className="space-y-5">
                  <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-[var(--color-accent)]/5 p-4 rounded-r-lg">
                    <h4 className="text-lg font-bold text-gray-800">WellPet Nuxes (2025) — Final Year Project</h4>
                    <p className="text-[var(--color-accent)] font-semibold mb-2">AI-Enabled Full-Stack Pet Management & Health Assistance System</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mb-3">
                      <li>Designed and implemented complete full-stack architecture with scalable backend APIs</li>
                      <li>Integrated AI health monitoring system tracking pet health conditions and suggesting actions</li>
                      <li>Built secure authentication system (JWT, bcrypt) with role-based access</li>
                      <li>Designed modern, responsive UI/UX using Figma and Tailwind CSS</li>
                      <li>Added interactive analytics dashboard using Chart.js and React hooks</li>
                      <li>Used RESTful APIs and server-side rendering (SSR) for optimized speed and SEO</li>
                    </ul>
                    <p className="text-xs text-gray-600"><strong>Tech Stack:</strong> Next.js, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, AI APIs (TensorFlow.js), Chart.js, Figma, Vercel</p>
                  </div>

                  <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-[var(--color-accent)]/5 p-4 rounded-r-lg">
                    <h4 className="text-lg font-bold text-gray-800">Pet Online Shopper (2022)</h4>
                    <p className="text-[var(--color-accent)] font-semibold mb-2">Full-Stack E-Commerce Platform for Pet Supplies</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mb-3">
                      <li>Built dynamic shopping platform with cart, order, and payment modules</li>
                      <li>Developed custom admin dashboard for managing products, users, and transactions</li>
                      <li>Integrated search, filtering, and sorting algorithms for better user experience</li>
                      <li>Designed responsive, SEO-optimized frontend with real-time data rendering</li>
                      <li>Applied secure database handling and form validation techniques</li>
                    </ul>
                    <p className="text-xs text-gray-600"><strong>Tech Stack:</strong> PHP, MySQL, JavaScript (ES6), HTML5, CSS3, Bootstrap 5, AJAX, REST API, cPanel, Google Analytics</p>
                  </div>

                  <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-[var(--color-accent)]/5 p-4 rounded-r-lg">
                    <h4 className="text-lg font-bold text-gray-800">B9 — Advanced 2D Game Project (2024)</h4>
                    <p className="text-[var(--color-accent)] font-semibold mb-2">AI-Driven Multi-Level Adventure Game</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mb-3">
                      <li>Developed multi-level interactive gameplay with story progression and character upgrades</li>
                      <li>Integrated AI-based enemy logic, obstacle patterns, and motion dynamics</li>
                      <li>Created custom animations, sprite sheets, and particle effects for realistic visuals</li>
                      <li>Optimized game performance using object pooling, memory management, and GPU rendering</li>
                      <li>Integrated audio engine for background score and interactive sound effects</li>
                      <li>Implemented cross-platform deployment and version control with GitHub</li>
                    </ul>
                    <p className="text-xs text-gray-600"><strong>Tech Stack:</strong> Unity Engine, C#, Blender, Adobe Photoshop, Visual Studio, Unity Physics, AI Pathfinding (A* Algorithm), 2D Animation System, Git, Firebase</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[var(--color-accent)] pl-4">
                    <h4 className="text-lg font-bold text-gray-800">Master of Science in Information Technology (MSc IT)</h4>
                    <p className="text-[var(--color-accent)] font-semibold">University of Sargodha</p>
                    <p className="text-sm text-gray-600 italic mb-2">2023 – 2025</p>
                    <p className="text-sm text-gray-700">Specialized in Web Engineering, Advanced Programming, Database Systems, and Digital Innovation</p>
                  </div>
                  <div className="border-l-4 border-[var(--color-accent)] pl-4">
                    <h4 className="text-lg font-bold text-gray-800">Bachelor of Science in Information Technology (BSc IT)</h4>
                    <p className="text-[var(--color-accent)] font-semibold">University of the Punjab</p>
                    <p className="text-sm text-gray-600 italic mb-2">2020 – 2022</p>
                    <p className="text-sm text-gray-700">Coursework: Programming Fundamentals, Data Structures, Networking, Database Management, and Web Development</p>
                  </div>
                </div>
              </div>

              {/* Professional Highlights */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Professional Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Developed and deployed 50+ websites and digital solutions for startups and global clients</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Expertise in SEO optimization, WordPress, and Shopify customization</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Delivered measurable business growth through digital marketing and e-commerce strategies</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Designed modern UI/UX systems aligned with Apple and Dribbble-style minimal design trends</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Trained junior developers and interns in React.js, UI/UX, and SEO</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] text-xl">•</span>
                    <span>Founder of AroVision Tech, a growing digital brand for web, AI, and creative tech solutions</span>
                  </li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {['Creativity', 'Leadership', 'Analytical Thinking', 'Communication', 'Team Collaboration', 'Problem-Solving', 'Project Management', 'Adaptability'].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-[var(--color-accent)] font-bold">•</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                  </svg>
                  Certifications & Achievements
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Certified Web Developer — Pluralsight</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>SEO & Digital Marketing Certification — Coursera</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>UI/UX Design Masterclass — Figma</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Freelancing & Communication Skills — Digiskills Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Google Digital Marketing Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-[var(--color-accent)] font-bold">•</span>
                    <span>Certified Graphic Designer — 30+ completed branding projects</span>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 flex items-center gap-2">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                  Additional Information
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    <span>Conducts workshops and training on Web Development, E-Commerce, and SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    <span>Active contributor on GitHub, building open-source tools and UI templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    <span>Founder of AroVision Tech, a growing digital brand for web, AI, and creative tech solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">→</span>
                    <span>Enthusiastic about innovation, automation, and continuous learning in modern technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fixed Bottom Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md py-3 px-4 no-print">
            <div className="max-w-4xl mx-auto flex justify-center gap-3">
              <button
                onClick={() => setShowResume(false)}
                className="flex items-center gap-2 px-5 py-2 bg-gray-500 text-white font-medium text-sm rounded-full shadow-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close Resume
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-5 py-2 bg-[var(--color-accent)] text-white font-medium text-sm rounded-full shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Website */}
      <div className="font-sans min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
        <ParticleTrailClient />
        
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-[var(--color-card)] shadow-soft flex items-center justify-center">
            <Image
              src="/images/aro.png"
              alt="Arovision Tech Logo"
              width={44}
              height={44}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div
            className="relative group"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <button
              className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
              aria-label="Open menu"
            >
              <span className="block w-1 h-1 bg-[var(--color-accent)] rounded-full mb-1"></span>
              <span className="block w-1 h-1 bg-[var(--color-accent)] rounded-full mb-1"></span>
              <span className="block w-1 h-1 bg-[var(--color-accent)] rounded-full"></span>
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[var(--color-card)] shadow-soft rounded-lg py-3 z-50 flex flex-col">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Process", href: "#process" },
                  { label: "Portfolio", href: "#portfolio" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-5 py-2 text-base font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg)] transition rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a
            href="#contact"
            className="btn-hover-effect shadow-soft bg-[var(--color-accent)] text-white font-semibold px-5 py-2 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        id="home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left Column: Content */}
        <div className="flex flex-col gap-7 md:-mt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <SplitText 
              text="Hello, I'm"
              className="inline-block"
              delay={0}
            />
            <br />
            <BlurText 
              text="Aroma Shahzadi"
              className="inline-block text-[var(--color-accent)] text-3xl sm:text-4xl md:text-5xl font-bold"
              delay={0.2}
            />
          </h1>
          {/* Tagline */}
          <div>
            <span className="block text-base sm:text-lg font-medium text-gray-700 tracking-tight">
              Turning Vision into Digital Masterpieces
            </span>
          </div>
          {/* Animated Service Loop */}
          <div className="min-h-[2.5rem]">
            <span className="text-base sm:text-lg text-[var(--color-text-secondary)] font-semibold mr-2">
              I specialize in
            </span>
            <TextType
              key={serviceIdx}
              text={animatedServices[serviceIdx]}
              className="inline-block text-base sm:text-lg text-[var(--color-accent)] font-bold"
              speed={50}
            />
          </div>
          {/* Buttons */}
          <div className="flex flex-row gap-2 mt-4 w-full max-w-xl">
            <a
              href="#contact"
              className="btn-hover-effect shadow-soft bg-white text-[var(--color-accent)] font-semibold px-4 py-2 rounded-full text-sm border-2 border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition hover:bg-[var(--color-accent)] hover:text-white text-center"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="btn-hover-effect shadow-soft bg-white text-[var(--color-accent)] font-semibold px-4 py-2 rounded-full text-sm border-2 border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition hover:bg-[var(--color-accent)] hover:text-white text-center"
            >
              View My Work
            </a>
            <button
              type="button"
              className="btn-hover-effect shadow-soft bg-white text-[var(--color-accent)] font-semibold px-4 py-2 rounded-full text-sm border-2 border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition hover:bg-[var(--color-accent)] hover:text-white text-center"
              onClick={() => window.open('/resume', '_blank')}
            >
              View Resume
            </button>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-[var(--color-card)] border border-[var(--color-accent)] p-2 hover:bg-[var(--color-accent)] hover:text-white transition shadow-soft">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17v-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-[var(--color-card)] border border-[var(--color-accent)] p-2 hover:bg-[var(--color-accent)] hover:text-white transition shadow-soft">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="5" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3.5" strokeWidth="1.5"/>
                <circle cx="17" cy="7" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full bg-[var(--color-card)] border border-[var(--color-accent)] p-2 hover:bg-[var(--color-accent)] hover:text-white transition shadow-soft">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/arovision-tech-306b00324" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-[var(--color-card)] border border-[var(--color-accent)] p-2 hover:bg-[var(--color-accent)] hover:text-white transition shadow-soft">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="4" className="stroke-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7.5 10.5v5M7.5 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 2v3m0 0v2m0-2c0-1.5 3-1.5 3 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Right Column: Profile Picture */}
        <div className="flex justify-center md:justify-end mt-8 md:-mt-20">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-[var(--color-accent)] shadow-soft flex items-center justify-center bg-[var(--color-card)] overflow-hidden">
            <Image
              src="/images/aroo.png"
              alt="Aroma Shahzadi profile photo"
              width={288}
              height={288}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold mb-12 text-center text-[var(--color-accent)]">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="order-2 md:order-1">
            <div className="text-base text-[var(--color-text-secondary)] leading-relaxed space-y-4 text-left">
              <p>
                My journey began with a curiosity about how technology transforms ideas into reality. Over the past 4 years, I've grown from a passionate learner into a full-stack developer, app creator, and SEO strategist building digital solutions that balance creativity with clean, scalable code.
              </p>
              <p>
                I started at <span className="font-semibold text-[var(--color-accent)]">Theeta Software House</span>, mastering full-stack development with PHP, React, and database management. At <span className="font-semibold text-[var(--color-accent)]">MicroTech Software House</span>, I honed my frontend and UI/UX skills, creating responsive interfaces for SaaS and EdTech platforms.
              </p>
              <p>
                Now at <span className="font-semibold text-[var(--color-accent)]">BoostXperts Software House</span>, I lead projects as a Web & App Developer and SEO Specialist, developing modern Next.js applications and optimizing digital performance for global brands. Each phase of my journey reinforces my belief that innovation and smart design create experiences that truly inspire.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-6 btn-hover-effect shadow-soft bg-white text-[var(--color-accent)] font-semibold px-5 py-2 rounded-full text-sm border-2 border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 transition hover:bg-[var(--color-accent)] hover:text-white"
            >
              Let&apos;s Work Together
            </a>
          </div>

          {/* Right Column: Illustration */}
          <div className="order-1 md:order-2 flex justify-center -mt-16">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/codde.png"
                alt="About Me Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <h3 className="text-2xl font-bold mb-12 text-center text-[var(--color-accent)]">My Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Full Stack Web Development",
              desc: "Crafting fast, responsive, and scalable web solutions using React.js, Next.js, Node.js, and Tailwind CSS — built for performance and innovation.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><g><polyline points="16 18 22 12 16 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
              ),
            },
            {
              title: "Creative Content Design",
              desc: "Designing engaging graphics, videos, and written content for digital platforms, social media, and branding.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="4" strokeWidth="1.5"/><path d="M7 17l5-5 5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/></svg>
              ),
            },
            {
              title: "Consultation",
              desc: "Providing expert advice and strategic guidance for digital transformation, project planning, and technology adoption.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="1.5"/><path d="M12 16v-4M12 8h.01" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ),
            },
            {
              title: "App Development",
              desc: "Developing secure and smooth cross-platform mobile and web apps with modern UI and seamless backend integration.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="1.5"/><circle cx="12" cy="18" r="1" fill="currentColor"/></svg>
              ),
            },
            {
              title: "Shopify & WordPress Solutions",
              desc: "Designing custom e-commerce stores, handling theme customization, and integrating analytics to grow your online sales.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 7l9-4 9 4v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" strokeWidth="1.5"/><path d="M16 21v-4a4 4 0 0 0-8 0v4" strokeWidth="1.5"/></svg>
              ),
            },
            {
              title: "SEO & Digital Marketing",
              desc: "Boosting visibility through on-page/off-page SEO, smart ad campaigns, and effective keyword & content strategies for measurable results.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="1.5"/><path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ),
            },
            {
              title: "UI/UX & Branding Design",
              desc: "Creating clean, modern, and user-focused designs using Figma, Adobe XD, and Canva — blending aesthetics with functionality.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" strokeWidth="1.5"/></svg>
              ),
            },
            {
              title: "Social Media Boosting",
              desc: "Delivering complete branding and engagement strategies to increase reach, visibility, and conversions across all platforms.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17v-3z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ),
            },
            {
              title: "Tech Problem Solutions",
              desc: "Solving complex technical issues and providing expert troubleshooting for web, app, and server environments.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" strokeWidth="1.5"/></svg>
              ),
            },
            {
              title: "Performance Optimization & Speed Enhancement",
              desc: "Improving website and app speed, reducing load times, and optimizing code for maximum performance.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" strokeWidth="1.5"/><circle cx="12" cy="12" r="7" strokeWidth="1.5"/><path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ),
            },
            {
              title: "AI & Automation Integration",
              desc: "Integrating AI-powered features and automating workflows to boost efficiency and innovation.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="7" width="20" height="10" rx="5" strokeWidth="1.5"/><circle cx="7" cy="12" r="2" strokeWidth="1.5"/><circle cx="17" cy="12" r="2" strokeWidth="1.5"/><path d="M12 17v2M12 5v2" strokeWidth="1.5"/></svg>
              ),
            },
            {
              title: "Custom API Development & Integration",
              desc: "Building and integrating custom APIs for seamless data exchange and enhanced functionality.",
              icon: (
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.5"/><path d="M8 12h8M12 8v8" strokeWidth="1.5" strokeLinecap="round"/></svg>
              ),
            },
          ].map((service, idx) => (
            <div key={idx} className="group bg-[var(--color-card)] rounded-xl shadow-soft border-t-4 border-[var(--color-accent)] p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--color-accent)] hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <div className="mb-3 text-[var(--color-accent)] group-hover:text-white transition-colors duration-200">{service.icon}</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-200">{service.title}</h4>
              <p className="text-[var(--color-text-secondary)] text-sm group-hover:text-white transition-colors duration-200">{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Work Process Section */}
      <section id="process" className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-2xl shadow-soft mt-8">
        <h3 className="text-2xl font-bold mb-10 text-center text-[var(--color-accent)]">Work Process</h3>
        <WorkProcessFlow />
      </section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-[var(--color-accent)]">Featured Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "BoostXperts", img: "/images/hbg.jpg", desc: "Modern education management system with student portal, course management, and admin dashboard.", tech: ["React.js", "Node.js", "MongoDB"], url: "https://www.boostxperts.com/" },
            { name: "Luxeria Hub", img: "/images/watch.jpg", desc: "Luxury marketplace platform with advanced filtering, wishlist, and secure checkout features.", tech: ["Next.js", "Tailwind", "Stripe"], url: "https://luxeriahub.com" },
            { name: "Clean Freak Car Wash", img: "/images/car.jpg", desc: "Modern car wash booking platform with membership system and real-time scheduling.", tech: ["React.js", "Node.js", "MySQL"], url: "https://cleanfreakcarwash.com" },
            { name: "Jhonali Carpenter", img: "/images/cup5.jpg", desc: "Portfolio website for a carpentry business with project gallery and quote system.", tech: ["WordPress", "PHP", "jQuery"], url: "https://jhonalicarpenter.com" },
            { name: "Orekyo", img: "/images/or.png", desc: "Modern SaaS platform for business management with analytics dashboard.", tech: ["React", "Firebase", "Chart.js"], url: "https://orekyo.com" },
            { name: "Oladoc", img: "/images/doc.jpg", desc: "Healthcare appointment booking platform with doctor profiles and reviews.", tech: ["Laravel", "Vue.js", "MySQL"], url: "https://oladoc.com" },
          ].map((project, idx) => (
            <div key={idx} className="group bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image src={project.img} alt={project.name} fill style={{ objectFit: "cover" }} className="group-hover:scale-110 transition-transform duration-300" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">{project.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--color-accent)] font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16 relative">
        <h3 className="text-2xl font-bold mb-12 text-center text-[var(--color-accent)]">Client Testimonials</h3>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  key={currentTestimonial}
                  direction={direction}
                  testimonial={testimonials[currentTestimonial]}
                  isVisible={true}
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={nextTestimonial}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? "bg-[var(--color-accent)] w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-[var(--color-accent)]">Get In Touch</h3>
        <motion.div
          className="bg-white rounded-2xl shadow-soft p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Column 1: Contact Form */}
          <form className="space-y-5" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            const whatsappMessage = `*New Message from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
            window.open(`https://wa.me/923358216411?text=${whatsappMessage}`, '_blank');
          }}>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-accent)] mb-1">Name</label>
              <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] outline-none bg-gray-50" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-accent)] mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] outline-none bg-gray-50" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-accent)] mb-1">Message</label>
              <textarea name="message" required rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] outline-none bg-gray-50" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="w-full py-2 rounded-lg font-bold text-white bg-[var(--color-accent)] shadow transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">Send Message</button>
          </form>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923358216411?text=👋%20Hello%20AroVision%20Tech!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-50 shadow hover:scale-105 transition-transform text-[var(--color-accent)] font-semibold"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.69.97.99-3.59-.25-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.4 0 4.68.84 6.5 2.36A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              <span>WhatsApp</span>
            </a>
            {/* Call */}
            <a
              href="tel:+923358216411"
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-50 shadow hover:scale-105 transition-transform text-[var(--color-accent)] font-semibold"
              aria-label="Call"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/></svg>
              <span>Call</span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/arovisiontech/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-50 shadow hover:scale-105 transition-transform text-[var(--color-accent)] font-semibold"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41C8.416 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.276-.058 2.15-.24 2.91-.51.8-.28 1.48-.65 2.15-1.32.67-.67 1.04-1.35 1.32-2.15.27-.76.452-1.634.51-2.91C23.988 15.264 24 14.86 24 12c0-3.264-.012-3.668-.07-4.948-.058-1.276-.24-2.15-.51-2.91C23.42 2.84 22.07 2.07 20.52 2.48z"/></svg>
              <span>Instagram</span>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/arovisiontech/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-50 shadow hover:scale-105 transition-transform text-[var(--color-accent)] font-semibold"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              <span>Facebook</span>
            </a>
            {/* Email */}
            <a
              href="mailto:arovisiontech@gmail.com"
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-50 shadow hover:scale-105 transition-transform text-[var(--color-accent)] font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z"/></svg>
              <span>arovisiontech@gmail.com</span>
            </a>
          </div>

          {/* Column 3: Illustration */}
          <div className="flex justify-center items-center">
            <img src="/images/Contact us-amico.png" alt="Contact Illustration" className="w-full max-w-xs h-auto" loading="lazy" />
          </div>
        </motion.div>
      </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center text-[var(--color-text-secondary)]">
            <p>&copy; {new Date().getFullYear()} Arovision Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    window.close();
    // If window.close() doesn't work (some browsers block it), navigate to home
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  };

  return (
    <div className="bg-white min-h-screen">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm 1.5cm;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          html {
            margin: 0 !important;
            padding: 0 !important;
          }

          .print-button, .no-print {
            display: none !important;
          }

          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .resume-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: none !important;
          }

          h1, h2, h3, h4 {
            page-break-after: avoid;
            break-after: avoid;
          }

          ul, li {
            page-break-inside: avoid;
            break-inside: avoid;
          }

          /* Hide browser's default header and footer */
          @page {
            margin-top: 1cm;
            margin-bottom: 1cm;
          }
        }
      `}</style>

      {/* Header - Not printed */}
      <header className="no-print bg-gradient-to-r from-purple-100 to-pink-100 py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-accent)] shadow-md">
              <Image
                src="/images/aroo.png"
                alt="Aroma Shahzadi"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-accent)]">Aroma Shahzadi</h1>
          </div>
        </div>
      </header>

      <div className="resume-container max-w-4xl mx-auto p-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-[var(--color-accent)] pb-6">
          <h1 className="text-4xl font-bold text-[var(--color-accent)] mb-2">Aroma Shahzadi</h1>
          <h2 className="text-xl text-gray-700 mb-4 font-semibold">Full Stack Developer | UI/UX Designer | SEO Specialist</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
            <div>• Contact: +92 3358216411</div>
            <div>• Email: arovisiontech@gmail.com</div>
            <div>• Location: Sialkot, Punjab, Pakistan</div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Professional Summary</h3>
          <p className="text-gray-700">
            I'm Aroma Shahzadi, a passionate and innovative Web Developer, App Developer, and SEO Specialist with over 4 years of experience in software development, e-commerce, UI/UX design, and digital marketing. I specialize in building modern, scalable, and high-performing web solutions that combine creativity with technical precision. My mission is to deliver clean, fast, and functional digital experiences that help brands grow and stand out in the competitive online world. With expertise across multiple technologies and frameworks, I've successfully completed projects for software houses, startups, and international clients, bringing together smart design, structured code, and impactful marketing strategies.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Work Experience</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-bold">Web Developer | App Developer | SEO Specialist | Database Manager</h4>
            <div className="text-[var(--color-accent)] font-semibold">BoostXperts Software House</div>
            <div className="text-gray-600 italic mb-2">2021 – Present | Sialkot, Pakistan</div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Designed and developed Next.js, React.js, and Tailwind CSS-based web applications</li>
              <li>Built custom Shopify and WordPress stores with advanced e-commerce and analytics integrations</li>
              <li>Optimized websites for SEO, performance, and mobile responsiveness</li>
              <li>Designed clean and professional UI/UX layouts using Figma and Adobe XD</li>
              <li>Managed MySQL, MongoDB, and Firebase databases with data security focus</li>
              <li>Created social media and branding campaigns, increasing online visibility</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold">Frontend Developer | UI/UX Designer</h4>
            <div className="text-[var(--color-accent)] font-semibold">MicroTech Software House</div>
            <div className="text-gray-600 italic mb-2">2020 – 2021 | Sialkot, Pakistan</div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed modern, interactive frontends using HTML5, CSS3, and JavaScript (ES6)</li>
              <li>Worked on multiple SaaS and EdTech platforms</li>
              <li>Collaborated with backend teams for seamless API integrations</li>
              <li>Designed interactive prototypes and landing pages</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-bold">Junior Full-Stack Developer</h4>
            <div className="text-[var(--color-accent)] font-semibold">Theeta Software House</div>
            <div className="text-gray-600 italic mb-2">2019 – 2020 | Sialkot, Pakistan</div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed dynamic web applications using PHP, Laravel, and React.js</li>
              <li>Built secure authentication systems and RESTful APIs</li>
              <li>Worked on database design and Git version control</li>
              <li>Supported senior developers in optimizing codebases</li>
            </ul>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mb-8 print:mb-4">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4 print:mb-2">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-3">
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Languages & Frameworks</h4>
              <p className="text-gray-700 text-sm">HTML5, CSS3, JavaScript (ES6+), TypeScript, PHP, React.js, Next.js, Node.js, Express.js, Laravel, Tailwind CSS, Bootstrap, SASS</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Web & App Development</h4>
              <p className="text-gray-700 text-sm">WordPress, Shopify, PWAs, REST APIs, Firebase, Headless CMS</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Databases & Cloud</h4>
              <p className="text-gray-700 text-sm">MySQL, MongoDB, Firebase, Supabase, Cloudflare, AWS (Basic), Google Cloud</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Design & UI/UX Tools</h4>
              <p className="text-gray-700 text-sm">Figma, Adobe XD, Canva, Photoshop, Illustrator, Framer Motion, GSAP</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Digital Marketing & SEO</h4>
              <p className="text-gray-700 text-sm">SEO Optimization, Keyword Research, Google Ads, Facebook Ads, Social Media Campaigns, Content Strategy, Analytics</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Version Control & Deployment</h4>
              <p className="text-gray-700 text-sm">Git, GitHub, Postman, Vercel, Netlify, cPanel, Docker (Basic)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Other Technologies</h4>
              <p className="text-gray-700 text-sm">Web Hosting, API Integration, JSON, Responsive Design, PageSpeed Optimization, Brand Identity Development</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-bold mb-2 text-[var(--color-accent)]">Programming</h4>
              <p className="text-gray-700 text-sm">JavaScript, TypeScript, Python, C++, Problem-solving, Algorithmic Thinking</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Education</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold">Master of Science in Information Technology (MSc IT)</h4>
            <div className="text-[var(--color-accent)] font-semibold">University of Sargodha</div>
            <div className="text-gray-600 italic">2023 – 2025</div>
            <p className="text-gray-700">Specialized in Web Engineering, Advanced Programming, Database Systems, and Digital Innovation</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Bachelor of Science in Information Technology (BSc IT)</h4>
            <div className="text-[var(--color-accent)] font-semibold">University of the Punjab</div>
            <div className="text-gray-600 italic">2020 – 2022</div>
            <p className="text-gray-700">Coursework: Programming Fundamentals, Data Structures, Networking, Database Management, and Web Development</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Highlighted Technical Projects</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-purple-50 p-4 rounded-r">
              <h4 className="text-xl font-bold">WellPet Nuxes (2025) — Final Year Project</h4>
              <div className="text-[var(--color-accent)] font-semibold mb-2">AI-Enabled Full-Stack Pet Management & Health Assistance System</div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Designed and implemented complete full-stack architecture with scalable backend APIs</li>
                <li>Integrated AI health monitoring system tracking pet health conditions and suggesting actions</li>
                <li>Built secure authentication system (JWT, bcrypt) with role-based access</li>
                <li>Designed modern, responsive UI/UX using Figma and Tailwind CSS</li>
                <li>Added interactive analytics dashboard using Chart.js and React hooks</li>
                <li>Used RESTful APIs and server-side rendering (SSR) for optimized speed and SEO</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2"><strong>Tech Stack:</strong> Next.js, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, AI APIs (TensorFlow.js), Chart.js, Figma, Vercel</p>
            </div>
            
            <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-purple-50 p-4 rounded-r">
              <h4 className="text-xl font-bold">Pet Online Shopper (2022)</h4>
              <div className="text-[var(--color-accent)] font-semibold mb-2">Full-Stack E-Commerce Platform for Pet Supplies</div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Built dynamic shopping platform with cart, order, and payment modules</li>
                <li>Developed custom admin dashboard for managing products, users, and transactions</li>
                <li>Integrated search, filtering, and sorting algorithms for better user experience</li>
                <li>Designed responsive, SEO-optimized frontend with real-time data rendering</li>
                <li>Applied secure database handling and form validation techniques</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2"><strong>Tech Stack:</strong> PHP, MySQL, JavaScript (ES6), HTML5, CSS3, Bootstrap 5, AJAX, REST API, cPanel, Google Analytics</p>
            </div>

            <div className="border-l-4 border-[var(--color-accent)] pl-4 bg-purple-50 p-4 rounded-r">
              <h4 className="text-xl font-bold">B9 — Advanced 2D Game Project (2024)</h4>
              <div className="text-[var(--color-accent)] font-semibold mb-2">AI-Driven Multi-Level Adventure Game</div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Developed multi-level interactive gameplay with story progression and character upgrades</li>
                <li>Integrated AI-based enemy logic, obstacle patterns, and motion dynamics</li>
                <li>Created custom animations, sprite sheets, and particle effects for realistic visuals</li>
                <li>Optimized game performance using object pooling, memory management, and GPU rendering</li>
                <li>Integrated audio engine for background score and interactive sound effects</li>
                <li>Implemented cross-platform deployment and version control with GitHub</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2"><strong>Tech Stack:</strong> Unity Engine, C#, Blender, Adobe Photoshop, Visual Studio, Unity Physics, AI Pathfinding (A* Algorithm), 2D Animation System, Git, Firebase</p>
            </div>
          </div>
        </section>

        {/* Professional Highlights */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Professional Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Developed and deployed 50+ websites and digital solutions for startups and global clients</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Expertise in SEO optimization, WordPress, and Shopify customization</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Delivered measurable business growth through digital marketing and e-commerce strategies</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Designed modern UI/UX systems aligned with Apple and Dribbble-style minimal design trends</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Trained junior developers and interns in React.js, UI/UX, and SEO</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] text-xl">•</span>
              <p className="text-gray-700 text-sm">Founder of AroVision Tech, a growing digital brand for web, AI, and creative tech solutions</p>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Creativity', 'Leadership', 'Analytical Thinking', 'Communication', 'Team Collaboration', 'Problem-Solving', 'Project Management', 'Adaptability'].map((skill) => (
              <div key={skill} className="flex items-center gap-2 bg-purple-50 p-2 rounded">
                <span className="text-[var(--color-accent)] font-bold">•</span>
                <span className="text-gray-700 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">Certified Web Developer — Pluralsight</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">SEO & Digital Marketing Certification — Coursera</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">UI/UX Design Masterclass — Figma</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">Freelancing & Communication Skills — Digiskills Pakistan</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">Google Digital Marketing Certified</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold">•</span>
              <p className="text-gray-700 text-sm">Certified Graphic Designer — 30+ completed branding projects</p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-accent)] mb-4">Additional Information</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">→</span>
              <p className="text-gray-700 text-sm">Conducts workshops and training on Web Development, E-Commerce, and SEO</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">→</span>
              <p className="text-gray-700 text-sm">Active contributor on GitHub, building open-source tools and UI templates</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">→</span>
              <p className="text-gray-700 text-sm">Founder of AroVision Tech, a growing digital brand for web, AI, and creative tech solutions</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">→</span>
              <p className="text-gray-700 text-sm">Enthusiastic about innovation, automation, and continuous learning in modern technologies</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <div className="text-center text-gray-600 text-sm mb-8">
          <div className="flex justify-center gap-4">
            <span>Email: arovisiontech@gmail.com</span>
            <span>Phone: +92 3358216411</span>
            <span>Location: Sialkot, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Footer - Not printed */}
      <footer className="no-print fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-center gap-4">
          <button
            onClick={handlePrint}
            className="px-6 py-2 bg-[var(--color-accent)] text-white rounded-full hover:bg-opacity-90 transition-all font-medium shadow-md flex items-center gap-2"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-all font-medium shadow-md flex items-center gap-2"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close Resume
          </button>
        </div>
      </footer>
    </div>
  );
}
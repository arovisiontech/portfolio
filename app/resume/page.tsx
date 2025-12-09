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
            <div>2 Contact: +92 3358216411</div>
            <div>2 Email: arovisiontech@gmail.com</div>
            <div>2 Location: Sialkot, Punjab, Pakistan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | TravelIQ",
  description:
    "Read the terms and conditions for using Travel IQ Services Private Limited services and website.",
  alternates: {
    canonical: "https://traveliq.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | TravelIQ",
    description:
      "Read the terms and conditions for using Travel IQ Services Private Limited services and website.",
    url: "https://traveliq.in/terms-and-conditions",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | TravelIQ",
    description:
      "Read the terms and conditions for using Travel IQ Services Private Limited services and website.",
  },
};

type Section = {
  heading: string;
  body: string;
};

function TermsPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <main className="terms-wrapper">
      {/* Scoped CSS for single-page presentation and print optimization */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .terms-wrapper {
              --tiq-navy: #0b2d5c;
              --tiq-accent: #ffd966;
              --tiq-bg: #f5f8fd;
              --tiq-card: #ffffff;
              --tiq-text: #1e293b;
              --tiq-muted: #64748b;
              --tiq-border: #e6ecf5;

              position: relative;
              min-height: 100vh;
              padding: 4rem 1.25rem 5rem;
              overflow: hidden;
              background: var(--tiq-bg);
              color: var(--tiq-text);
              font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Helvetica, Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              line-height: 1.65;
            }

            .terms-wrapper *,
            .terms-wrapper *::before,
            .terms-wrapper *::after {
              box-sizing: border-box;
            }

            .terms-bg {
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 0;
            }

            .terms-wrapper .blob {
              position: absolute;
              border-radius: 50%;
              filter: blur(90px);
              opacity: 0.55;
            }

            .terms-wrapper .blob-1 {
              width: 420px;
              height: 420px;
              background: #c7ddff;
              top: -120px;
              left: -100px;
            }

            .terms-wrapper .blob-2 {
              width: 360px;
              height: 360px;
              background: #ffe9a8;
              top: 35%;
              right: -120px;
              opacity: 0.4;
            }

            .terms-wrapper .blob-3 {
              width: 300px;
              height: 300px;
              background: #b7e4d4;
              bottom: -80px;
              left: 25%;
              opacity: 0.35;
            }

            .terms-container {
              position: relative;
              z-index: 1;
              max-width: 920px;
              margin: 0 auto;
            }

            .terms-header {
              background: linear-gradient(135deg, #0b2d5c 0%, #1c4a86 100%);
              color: #fff;
              border-radius: 28px;
              padding: 2.75rem 2.5rem;
              box-shadow: 0 30px 60px -25px rgba(11, 45, 92, 0.55),
                0 10px 20px -10px rgba(11, 45, 92, 0.25);
              position: relative;
              overflow: hidden;
              margin-bottom: 2rem;
            }

            .terms-header::after {
              content: "";
              position: absolute;
              top: -60px;
              right: -60px;
              width: 220px;
              height: 220px;
              background: radial-gradient(
                circle,
                rgba(255, 217, 102, 0.35) 0%,
                transparent 70%
              );
              border-radius: 50%;
            }

            .terms-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              background: rgba(255, 255, 255, 0.12);
              border: 1px solid rgba(255, 255, 255, 0.22);
              color: #fff;
              padding: 0.4rem 0.9rem;
              border-radius: 999px;
              font-size: 0.78rem;
              font-weight: 500;
              letter-spacing: 0.02em;
              margin-bottom: 1.25rem;
              backdrop-filter: blur(4px);
            }

            .terms-header h1 {
              font-size: clamp(1.6rem, 3.4vw, 2.3rem);
              font-weight: 700;
              line-height: 1.2;
              letter-spacing: -0.02em;
              margin: 0 0 0.75rem;
            }

            .terms-intro {
              margin: 0;
              max-width: 680px;
              font-size: 0.98rem;
              color: rgba(255, 255, 255, 0.86);
              border-left: 3px solid var(--tiq-accent);
              padding-left: 1rem;
            }

            .terms-card {
              background: var(--tiq-card);
              border-radius: 24px;
              border: 1px solid var(--tiq-border);
              box-shadow: 0 20px 40px -28px rgba(15, 23, 42, 0.28),
                0 4px 14px -8px rgba(15, 23, 42, 0.08);
              overflow: hidden;
            }

            .terms-item {
              padding: 1.75rem 2rem;
              border-bottom: 1px solid var(--tiq-border);
              transition: background 0.25s ease;
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .terms-item:last-child {
              border-bottom: none;
            }

            .terms-item:hover {
              background: #f8fbff;
            }

            .terms-heading {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              font-size: 1.08rem;
              font-weight: 600;
              color: var(--tiq-navy);
              margin: 0 0 0.75rem;
              letter-spacing: -0.01em;
            }

            .terms-heading-bar {
              width: 6px;
              height: 22px;
              border-radius: 4px;
              background: linear-gradient(180deg, var(--tiq-navy), #4a7bc7);
              flex-shrink: 0;
            }

            .terms-body {
              font-size: 0.98rem;
              color: #334155;
              margin: 0;
            }

            .terms-body p {
              margin: 0 0 0.75rem;
            }

            .terms-body p:last-child {
              margin-bottom: 0;
            }

            .terms-footer {
              margin-top: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.75rem;
              flex-wrap: wrap;
              background: #ffffff;
              border: 1px solid var(--tiq-border);
              border-radius: 999px;
              padding: 0.9rem 1.5rem;
              color: var(--tiq-muted);
              font-size: 0.88rem;
              box-shadow: 0 10px 25px -20px rgba(15, 23, 42, 0.3);
              text-align: center;
            }

            .terms-footer a {
              color: var(--tiq-navy);
              font-weight: 600;
              text-decoration: none;
              border-bottom: 1px dashed rgba(11, 45, 92, 0.4);
            }

            .terms-footer a:hover {
              border-bottom-color: var(--tiq-navy);
            }

            @media print {
              .terms-wrapper {
                background: #ffffff !important;
                padding: 0 !important;
              }
              .terms-bg {
                display: none !important;
              }
              .terms-header {
                background: none !important;
                color: #000000 !important;
                box-shadow: none !important;
                padding: 1rem 0 !important;
              }
              .terms-intro {
                color: #333333 !important;
              }
              .terms-card {
                box-shadow: none !important;
                border: none !important;
              }
              .terms-item {
                border-bottom: 1px solid #ccc !important;
              }
            }

            @media (max-width: 720px) {
              .terms-wrapper {
                padding: 2.5rem 1rem 3.5rem;
              }
              .terms-header {
                padding: 2rem 1.5rem;
                border-radius: 22px;
              }
              .terms-item {
                padding: 1.35rem 1.35rem;
              }
              .terms-heading {
                font-size: 1rem;
              }
              .terms-body {
                font-size: 0.94rem;
              }
              .terms-footer {
                border-radius: 18px;
                font-size: 0.82rem;
                padding: 0.85rem 1.1rem;
              }
            }
          `,
        }}
      />

      {/* Decorative background blobs */}
      <div className="terms-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="terms-container">
        {/* Header */}
        <header className="terms-header">
          <div className="terms-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Legal · Travel IQ Services Pvt. Ltd.</span>
          </div>
          <h1>{title}</h1>
          {intro ? <p className="terms-intro">{intro}</p> : null}
        </header>

        {/* Sections in a single unified card container */}
        <section className="terms-card" aria-label="Terms and conditions sections">
          {sections.map((section, index) => (
            <article key={index} className="terms-item">
              <h2 className="terms-heading">
                <span className="terms-heading-bar" aria-hidden="true" />
                <span>{section.heading}</span>
              </h2>
              <div className="terms-body">
                {section.body.split("\n").map((line, lineIndex) => {
                  const trimmed = line.trim();
                  if (trimmed === "") return null;
                  return <p key={lineIndex}>{trimmed}</p>;
                })}
              </div>
            </article>
          ))}
        </section>

        {/* Footer note */}
        <footer className="terms-footer">
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@traveliq.in">support@traveliq.in</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <TermsPage
      title="Terms and Conditions of TravelIQ"
      intro="Last updated: 21/01/2022. Please read these Terms of Use carefully before using the https://traveliq.in website operated by Travel IQ Services Private Limited."
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using the TravelIQ website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
        },
        {
          heading: "2. Intellectual Property",
          body: "The Service and its original content, features, and functionality (including text, graphics, logos, images, icons, and software) are and will remain the exclusive property of Travel IQ Services Private Limited and its licensors.",
        },
        {
          heading: "3. Links to Other Websites",
          body: "Our Service may contain links to third-party web sites or services that are not owned or controlled by Travel IQ. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
        },
        {
          heading: "4. Termination and Disclaimer",
          body: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever. Your use of the Service is at your sole risk. The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind.",
        },
        {
          heading: "5. Governing Law and Changes",
          body: "These Terms shall be governed and construed in accordance with the laws of India. We reserve the right, at our sole discretion, to modify or replace these Terms at any time.",
        },
        {
          heading: "6. Contact Us",
          body: "If you have any questions about these Terms and Conditions, please contact us at support@traveliq.in or call +91 78350 25030.",
        },
      ]}
    />
  );
}

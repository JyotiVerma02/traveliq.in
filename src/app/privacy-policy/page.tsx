import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TravelIQ",
  description:
    "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
  alternates: {
    canonical: "https://traveliq.in/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
    url: "https://traveliq.in/privacy-policy/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's privacy policy regarding data collection, protection, and security.",
  },
};

type Section = {
  heading?: string;
  body: string;
};

function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <main className="privacy-wrapper">
      {/* Scoped styles — safe in Server Components */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .privacy-wrapper {
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

            .privacy-wrapper *,
            .privacy-wrapper *::before,
            .privacy-wrapper *::after {
              box-sizing: border-box;
            }

            .privacy-bg {
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 0;
            }

            .privacy-wrapper .blob {
              position: absolute;
              border-radius: 50%;
              filter: blur(90px);
              opacity: 0.55;
            }

            .privacy-wrapper .blob-1 {
              width: 420px;
              height: 420px;
              background: #c7ddff;
              top: -120px;
              left: -100px;
            }

            .privacy-wrapper .blob-2 {
              width: 360px;
              height: 360px;
              background: #ffe9a8;
              top: 35%;
              right: -120px;
              opacity: 0.4;
            }

            .privacy-wrapper .blob-3 {
              width: 300px;
              height: 300px;
              background: #b7e4d4;
              bottom: -80px;
              left: 25%;
              opacity: 0.35;
            }

            .privacy-container {
              position: relative;
              z-index: 1;
              max-width: 920px;
              margin: 0 auto;
            }

            .privacy-header {
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

            .privacy-header::after {
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

            .privacy-badge {
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

            .privacy-header h1 {
              font-size: clamp(1.6rem, 3.4vw, 2.3rem);
              font-weight: 700;
              line-height: 1.2;
              letter-spacing: -0.02em;
              margin: 0 0 0.75rem;
            }

            .privacy-intro {
              margin: 0;
              max-width: 680px;
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.86);
              border-left: 3px solid var(--tiq-accent);
              padding-left: 1rem;
            }

            .privacy-card {
              background: var(--tiq-card);
              border-radius: 24px;
              border: 1px solid var(--tiq-border);
              box-shadow: 0 20px 40px -28px rgba(15, 23, 42, 0.28),
                0 4px 14px -8px rgba(15, 23, 42, 0.08);
              overflow: hidden;
            }

            .privacy-item {
              padding: 1.75rem 2rem;
              border-bottom: 1px solid var(--tiq-border);
              transition: background 0.25s ease;
            }

            .privacy-item:last-child {
              border-bottom: none;
            }

            .privacy-item:hover {
              background: #f8fbff;
            }

            .privacy-heading {
              display: flex;
              align-items: center;
              gap: 0.75rem;
              font-size: 1.08rem;
              font-weight: 600;
              color: var(--tiq-navy);
              margin: 0 0 0.75rem;
              letter-spacing: -0.01em;
            }

            .privacy-heading-bar {
              width: 6px;
              height: 22px;
              border-radius: 4px;
              background: linear-gradient(180deg, var(--tiq-navy), #4a7bc7);
              flex-shrink: 0;
            }

            .privacy-body {
              font-size: 0.98rem;
              color: #334155;
              margin: 0;
            }

            .privacy-body p {
              margin: 0 0 0.75rem;
            }

            .privacy-body p:last-child {
              margin-bottom: 0;
            }

            .privacy-body .bullet {
              display: flex;
              align-items: flex-start;
              gap: 0.65rem;
              margin: 0 0 0.4rem;
            }

            .privacy-body .bullet-dot {
              flex-shrink: 0;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: var(--tiq-navy);
              margin-top: 0.6rem;
              box-shadow: 0 0 0 4px rgba(11, 45, 92, 0.08);
            }

            .privacy-body .spacer {
              height: 0.5rem;
            }

            .privacy-footer {
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

            .privacy-footer .footer-icon {
              color: var(--tiq-navy);
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }

            .privacy-footer a {
              color: var(--tiq-navy);
              font-weight: 600;
              text-decoration: none;
              border-bottom: 1px dashed rgba(11, 45, 92, 0.4);
            }

            .privacy-footer a:hover {
              border-bottom-color: var(--tiq-navy);
            }

            @media (max-width: 720px) {
              .privacy-wrapper {
                padding: 2.5rem 1rem 3.5rem;
              }
              .privacy-header {
                padding: 2rem 1.5rem;
                border-radius: 22px;
              }
              .privacy-item {
                padding: 1.35rem 1.35rem;
              }
              .privacy-heading {
                font-size: 1rem;
              }
              .privacy-body {
                font-size: 0.94rem;
              }
              .privacy-footer {
                border-radius: 18px;
                font-size: 0.82rem;
                padding: 0.85rem 1.1rem;
              }
            }
          `,
        }}
      />

      {/* Decorative background blobs */}
      <div className="privacy-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="privacy-container">
        {/* Header */}
        <header className="privacy-header">
          <div className="privacy-badge">
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
          {intro ? <p className="privacy-intro">{intro}</p> : null}
        </header>

        {/* Sections */}
        <section className="privacy-card" aria-label="Privacy policy sections">
          {sections.map((section, index) => (
            <article key={index} className="privacy-item">
              {section.heading ? (
                <h2 className="privacy-heading">
                  <span className="privacy-heading-bar" aria-hidden="true" />
                  <span>{section.heading}</span>
                </h2>
              ) : null}
              <div className="privacy-body">
                {section.body.split("\n").map((line, lineIndex) => {
                  const trimmed = line.trim();
                  if (trimmed === "") {
                    return (
                      <div key={lineIndex} className="spacer" aria-hidden="true" />
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <p key={lineIndex} className="bullet">
                        <span className="bullet-dot" aria-hidden="true" />
                        <span>{trimmed.slice(2)}</span>
                      </p>
                    );
                  }
                  return <p key={lineIndex}>{trimmed}</p>;
                })}
              </div>
            </article>
          ))}
        </section>

        {/* Footer note */}
        <footer className="privacy-footer">
          <div className="footer-icon" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <p>
            Questions about your data? Contact{" "}
            <a href="mailto:privacy@traveliq.in">privacy@traveliq.in</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <PolicyPage
      title="Privacy Policy of Travel IQ"
      intro="We maintain full privacy of your personal information shared with us. We never misuse any of your personal information. Our privacy policy is as given below:"
      sections={[
        {
          heading: "1. Collection and Sharing of customer information:",
          body: "We collect information from you only after you agree to provide it. Any information you give us is held with care and security. We may collect your title, name, gender, email address, postal address, telephone number, mobile number, payment details or bank account details. All this information is processed securely for your protection. Under no circumstances do we rent, trade or share your personal information for marketing purposes without your consent.",
        },
        {
          heading: "2. Intellectual Property Rights:",
          body: "All content included on this site, such as text, graphics, logos, button icons, images and software, is the property of Travel IQ Services Private Limited.",
        },
      ]}
    />
  );
}
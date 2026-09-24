import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | TravelIQ",
  description:
    "Read Travel IQ Services Private Limited's refund and cancellation policy for travel bookings and services.",
  alternates: {
    canonical: "https://traveliq.in/refund-cancellation-policy/",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's refund and cancellation policy for travel bookings and services.",
    url: "https://traveliq.in/refund-cancellation-policy/",
    siteName: "TravelIQ",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refund & Cancellation Policy | TravelIQ",
    description:
      "Read Travel IQ Services Private Limited's refund and cancellation policy for travel bookings and services.",
  },
};

type Section = {
  body: string;
};

function PolicyPage({
  title,
  sections,
}: {
  title: string;
  sections: Section[];
}) {
  return (
    <main className="policy-wrapper">
      {/* Scoped CSS – plain <style> tag, safe for Server Components */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .policy-wrapper {
              --tiq-navy: #0b2d5c;
              --tiq-navy-2: #143a72;
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

            .policy-wrapper *,
            .policy-wrapper *::before,
            .policy-wrapper *::after {
              box-sizing: border-box;
            }

            .policy-bg {
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 0;
            }

            .policy-wrapper .blob {
              position: absolute;
              border-radius: 50%;
              filter: blur(90px);
              opacity: 0.55;
            }

            .policy-wrapper .blob-1 {
              width: 420px;
              height: 420px;
              background: #c7ddff;
              top: -120px;
              left: -100px;
            }

            .policy-wrapper .blob-2 {
              width: 360px;
              height: 360px;
              background: #ffe9a8;
              top: 30%;
              right: -120px;
              opacity: 0.4;
            }

            .policy-wrapper .blob-3 {
              width: 300px;
              height: 300px;
              background: #b7e4d4;
              bottom: -80px;
              left: 30%;
              opacity: 0.35;
            }

            .policy-container {
              position: relative;
              z-index: 1;
              max-width: 920px;
              margin: 0 auto;
            }

            .policy-header {
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

            .policy-header::after {
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

            .policy-badge {
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

            .policy-header h1 {
              font-size: clamp(1.6rem, 3.4vw, 2.3rem);
              font-weight: 700;
              line-height: 1.2;
              letter-spacing: -0.02em;
              margin: 0 0 0.75rem;
            }

            .policy-subtitle {
              margin: 0;
              max-width: 640px;
              font-size: 0.98rem;
              color: rgba(255, 255, 255, 0.82);
              border-left: 3px solid var(--tiq-accent);
              padding-left: 1rem;
            }

            .policy-card {
              background: var(--tiq-card);
              border-radius: 24px;
              border: 1px solid var(--tiq-border);
              box-shadow: 0 20px 40px -28px rgba(15, 23, 42, 0.28),
                0 4px 14px -8px rgba(15, 23, 42, 0.08);
              overflow: hidden;
            }

            .policy-item {
              display: grid;
              grid-template-columns: 64px 1fr;
              gap: 1rem;
              padding: 1.6rem 2rem;
              border-bottom: 1px solid var(--tiq-border);
              transition: background 0.25s ease;
            }

            .policy-item:last-child {
              border-bottom: none;
            }

            .policy-item:hover {
              background: #f8fbff;
            }

            .policy-index {
              font-size: 0.85rem;
              font-weight: 600;
              color: var(--tiq-navy);
              background: #eaf2ff;
              border: 1px solid #d4e3fb;
              border-radius: 12px;
              height: 36px;
              width: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 0.03em;
              margin-top: 0.15rem;
            }

            .policy-body {
              font-size: 0.98rem;
              color: #334155;
            }

            .policy-text {
              margin: 0 0 0.75rem;
            }

            .policy-text:last-child {
              margin-bottom: 0;
            }

            .policy-bullet {
              display: flex;
              align-items: flex-start;
              gap: 0.65rem;
              margin: 0 0 0.4rem;
              padding-left: 0.15rem;
            }

            .policy-bullet:last-child {
              margin-bottom: 0;
            }

            .bullet-dot {
              flex-shrink: 0;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: var(--tiq-navy);
              margin-top: 0.6rem;
              box-shadow: 0 0 0 4px rgba(11, 45, 92, 0.08);
            }

            .policy-spacer {
              height: 0.5rem;
            }

            .policy-footer {
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

            .footer-icon {
              color: var(--tiq-navy);
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }

            .policy-footer a {
              color: var(--tiq-navy);
              font-weight: 600;
              text-decoration: none;
              border-bottom: 1px dashed rgba(11, 45, 92, 0.4);
            }

            .policy-footer a:hover {
              border-bottom-color: var(--tiq-navy);
            }

            @media (max-width: 720px) {
              .policy-wrapper {
                padding: 2.5rem 1rem 3.5rem;
              }
              .policy-header {
                padding: 2rem 1.5rem;
                border-radius: 22px;
              }
              .policy-item {
                grid-template-columns: 1fr;
                gap: 0.75rem;
                padding: 1.35rem 1.35rem;
              }
              .policy-index {
                height: 30px;
                width: 40px;
                font-size: 0.78rem;
                border-radius: 10px;
              }
              .policy-body {
                font-size: 0.94rem;
              }
              .policy-footer {
                border-radius: 18px;
                font-size: 0.82rem;
                padding: 0.85rem 1.1rem;
              }
            }
          `,
        }}
      />

      {/* Decorative background blobs */}
      <div className="policy-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="policy-container">
        {/* Header */}
        <header className="policy-header">
          <div className="policy-badge">
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
          <p className="policy-subtitle">
            Please read this policy carefully before booking any travel product
            or service with Travel IQ.
          </p>
        </header>

        {/* Sections */}
        <section className="policy-card" aria-label="Policy sections">
          {sections.map((section, index) => (
            <article key={index} className="policy-item">
              <div className="policy-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="policy-body">
                {section.body.split("\n").map((line, lineIndex) => {
                  const trimmed = line.trim();
                  if (trimmed === "") {
                    return <div key={lineIndex} className="policy-spacer" />;
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <p key={lineIndex} className="policy-bullet">
                        <span className="bullet-dot" />
                        <span>{trimmed.slice(2)}</span>
                      </p>
                    );
                  }
                  return (
                    <p key={lineIndex} className="policy-text">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        {/* Footer note */}
        <footer className="policy-footer">
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
            For any questions regarding this policy, contact{" "}
            <a href="mailto:support@traveliq.in">support@traveliq.in</a>.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <PolicyPage
      title="REFUND & CANCELLATION POLICY"
      sections={[
        {
          body: "In addition, Travel IQ shall not be held liable for the website’s unavailability during scheduled maintenance or any unscheduled suspension of access to the website that may occur for technical reasons or for any reason beyond Travel IQ’s control.",
        },
        {
          body: "The user acknowledges and agrees that any material and/or data downloaded or otherwise obtained through the website is done at their own discretion and risk, and that they are solely responsible for any damage to their computer systems or loss of data that results from the download of such material and/or data.",
        },
        {
          body: "These restrictions, disclaimer of warranties, and exclusions apply regardless of the cause of the damages.",
        },
        {
          body: "- breach of contract,\n- breach of warranty,\n- negligence, or\n- any other cause of action,\n\nif such exclusions and restrictions are not forbidden by applicable legislation.",
        },
        {
          body: "The maximum liability on the part of Travel IQ for any services supplied on the website shall be limited to the refund of the complete amount received from the customer for availing the services, less any applicable cancellation, refund, or other charges.",
        },
        {
          body: "In no event shall the liability extend to any indirect loss, damage, or additional expense.",
        },
        {
          body: "It is crucial that you enter each traveler’s information according to their passport or other form of identification. Some suppliers will deny transportation if the traveler’s name does not match the one on the reservation, and may cancel immediately if the name is changed. Travel IQ is not liable for any loss or damage resulting from the inaccurate registration of a traveler’s name or any inability to travel due to a carrier’s policies.",
        },
        {
          body: "In no event shall Travel IQ be liable for any direct, indirect, punitive, incidental, special, consequential damages or any other damages resulting from:\n\n- the use or the inability to use the services;\n- the cost of procurement of substitute goods and services or resulting from any goods, information or services purchased or obtained or messages received or transactions entered into through the services;\n- unauthorized access to or alteration of the user’s transmissions or data;\n- any other matter relating to the services;\n\nincluding, without limitation, damages for loss of use, data, or profits, arising out of or connected in any way to the use or performance of the website.",
        },
        {
          body: "Travel IQ shall not be liable for any delay or inability to use the website or related services, the provision of or failure to provide services, or for any information, software, products, services, and related graphics obtained through the website, or otherwise arising out of the use of the website, whether based on contract, tort, negligence, strict liability, or any other legal theory.",
        },
        {
          body: "The terms presented on this website are applicable to all of Travel IQ’s travel goods and packages.",
        },
        {
          body: "Airlines, hotels, wholesalers, and other travel suppliers may or may not publish extra terms and conditions pertaining to the purchase of these goods and services, which apply to the majority of travel-related products and services.",
        },
        {
          body: "For instance, suppliers frequently limit or exclude liability for death, personal injury, delay, and loss or damage to baggage, but we do not post such terms on this website.",
        },
      ]}
    />
  );
}
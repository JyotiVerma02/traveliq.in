export default function PartnerLogos() {
  const partners = [
    { name: "IRCTC", text: "IRCTC Official" },
    { name: "IATA", text: "IATA Accredited" },
    { name: "Air India", text: "Air India" },
    { name: "IndiGo", text: "IndiGo" },
    { name: "SpiceJet", text: "SpiceJet" },
    { name: "Vande Bharat", text: "Vande Bharat Express" },
  ];

  return (
    <div className="border-y border-[#10407A]/10 bg-[#071428] py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
          Authorized &amp; Accredited Partner Ecosystem
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white/90 transition hover:text-[#FF7043] sm:text-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE5326]" />
              <span>{partner.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

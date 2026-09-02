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
    <div className="w-full bg-white py-8 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Authorized &amp; Accredited Partner Ecosystem
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 transition-all">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-slate-700 font-extrabold text-base sm:text-lg tracking-tight select-none hover:text-[#1685e8] transition"
            >
              <span className="h-2 w-2 rounded-full bg-[#1685e8]" />
              <span>{partner.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

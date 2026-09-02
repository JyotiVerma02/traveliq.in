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
    <div className="w-full bg-[#10407A] py-8 border-y border-[#10407A]">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-white/60 mb-6">
          Authorized &amp; Accredited Partner Ecosystem
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-white font-extrabold text-base sm:text-lg tracking-tight select-none hover:text-[#EE5326] transition"
            >
              <span className="h-2 w-2 rounded-full bg-[#EE5326]" />
              <span>{partner.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

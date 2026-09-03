import Link from "next/link";

type ServiceDetailProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export default function ServiceDetail({ title, intro, sections }: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-[#f6f9fe]">
      <section className="bg-[#edf5ff] py-14 sm:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="hover:text-[#10407A]">Home</Link><span>/</span>
            <Link href="/our-services/" className="hover:text-[#10407A]">Services</Link><span>/</span>
            <span className="text-[#10407A]">{title}</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">{intro}</p>
        </div>
      </section>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <article key={section.heading} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-[#10407A]">{section.heading}</h2>
              <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-700">{section.body}</p>
            </article>
          ))}
          <div className="pt-2 text-center"><Link href="/irctc-agent-registration/" className="inline-flex rounded-full bg-[#EE5326] px-7 py-3.5 font-bold text-white">Register Now</Link></div>
        </div>
      </section>
    </main>
  );
}

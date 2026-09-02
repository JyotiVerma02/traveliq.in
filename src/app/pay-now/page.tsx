import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pay Now | TravelIQ - Account Details & Secure Payment",
  description:
    "Pay Online Secure Payment - Pay your payment securely to Travel IQ Services Private Limited. Bank Details: 50200014341411, IFSC: HDFC0003648.",
};

export default function PayNowPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f6f9fe] flex-1">
        {/* Header Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#cbf2ff]/70 via-[#eaf8ff]/50 to-[#f6f9fe] py-6 sm:py-8">
          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
              <Link href="/" className="transition hover:text-[#1685e8]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#1685e8]">Pay Now</span>
            </div>

            <div className="mx-auto max-w-4xl text-center space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Pay Online Secure Payment
              </h1>
              <p className="text-base font-semibold text-slate-700">
                Pay your payment securely
              </p>
            </div>
          </div>
        </section>

        {/* Account Details Section */}
        <section className="py-4 sm:py-6 pb-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              
              {/* Outer Card Container with Less Rounded Corners */}
              <div className="rounded-md border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
                <div className="grid gap-5 lg:grid-cols-12 items-stretch">
                  
                  {/* Left Column: Account Details Box */}
                  <div className="lg:col-span-7">
                    <div className="relative h-full overflow-hidden rounded-md border border-slate-300 bg-gradient-to-r from-[#d9dadc] via-[#d9dadc] to-[#ff5722] p-4 sm:p-5 shadow-xs flex flex-col justify-between">
                      
                      <div>
                        {/* Header Box inside Account Details */}
                        <div className="flex items-center gap-4 rounded-sm border border-slate-300/80 bg-[#e4e5e7]/90 p-3.5 shadow-xs">
                          <div className="shrink-0 bg-white rounded-xs p-1 shadow-xs">
                            <Image
                              src="/logo.png"
                              alt="TravelIQ"
                              width={110}
                              height={35}
                              className="h-7 w-auto object-contain"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                              Travel IQ Account Details
                            </h2>
                            <p className="text-xs font-semibold text-slate-600">
                              Pay your payment securely
                            </p>
                          </div>
                        </div>

                        {/* List Items with Bullet Icons */}
                        <div className="mt-6 space-y-3.5 text-xs sm:text-sm font-bold text-slate-900 px-2">
                          <div className="flex items-center gap-3">
                            <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5722] border-2 border-white shadow-xs"></span>
                            <span>A/C NAME : Travel IQ Services Private Limited</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5722] border-2 border-white shadow-xs"></span>
                            <span>BANK NAME : HDFC Bank Ltd</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5722] border-2 border-white shadow-xs"></span>
                            <span>ACCOUNT NO : 50200014341411</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5722] border-2 border-white shadow-xs"></span>
                            <span>IFSC CODE : HDFC0003648</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right Column: Travel / Laptop Photo */}
                  <div className="lg:col-span-5">
                    <div className="relative h-full min-h-[240px] sm:min-h-[280px] w-full overflow-hidden rounded-md shadow-xs border border-slate-200">
                      <Image
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1000&q=80"
                        alt="TravelIQ Online Payment & Booking"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold bg-slate-900/70 backdrop-blur-xs p-2.5 rounded-xs border border-white/20">
                        ⚡ Instant Online Settlement &amp; Receipt Generation
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

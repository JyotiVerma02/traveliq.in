import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Hero />
        <Services />
        <WhyWeBetter />
        <Testimonials />
        <LatestPosts />
      </main>
      <Footer />
    </>
  );
}

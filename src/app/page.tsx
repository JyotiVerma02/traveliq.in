import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWeBetter from "@/components/WhyWeBetter";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/OurNews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyWeBetter />
      <Testimonials />
      <LatestPosts />
    </>
  );
}

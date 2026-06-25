import Hero from "@/components/landingPage/home/hero";
import PackagesSection from "@/components/landingPage/home/packages/packagesSection";
import Destinations from "@/components/landingPage/home/sectionDestinations/destinations";
import WhyUsSection from "@/components/landingPage/home/sectionWithUs/whyUsSection";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      </div> */}
      <Hero />
      <PackagesSection />
      <Destinations />
      <WhyUsSection />
    </div>
  );
}

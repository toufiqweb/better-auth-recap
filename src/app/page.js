"use client";
import HeroSection from "@/components/dashboardpage/HeroSection";
import Banner from "@/components/homepage/Banner";
import CtaSection from "@/components/homepage/CtaSection";
import Features from "@/components/homepage/Features";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data } = authClient.useSession();

  const user = data?.user;

  return (
    <>
      <Banner />
      <HeroSection/>
      <Features />
      <CtaSection />
    </>
  );
}

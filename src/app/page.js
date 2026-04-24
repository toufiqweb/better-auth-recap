"use client";
import ActivityFeed from "@/components/dashboardpage/ActivityFeed";
import ProfileCard from "@/components/dashboardpage/ProfileCard";
import Sidebar from "@/components/dashboardpage/Sidebar";
import StatsSection from "@/components/dashboardpage/StatsSection";
import WelcomeBanner from "@/components/dashboardpage/WelcomeBanner";
import Banner from "@/components/homepage/Banner";
import CtaSection from "@/components/homepage/CtaSection";
import Features from "@/components/homepage/Features";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data } = authClient.useSession();

  const user = data?.user;

  return (
    <>
      {user ? (
        <main className="min-h-screen bg-gray-100">
          <section className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-4 gap-8">
            <Sidebar />

            <div className="lg:col-span-3 space-y-8">
              <WelcomeBanner user={user}/>
              <StatsSection />

              <section className="grid lg:grid-cols-3 gap-6">
                <ActivityFeed />
                <ProfileCard user={user}/>
              </section>
            </div>
          </section>
        </main>
      ) : (
        <>
          <Banner />
          <Features />
          <CtaSection />
        </>
      )}
    </>
  );
}

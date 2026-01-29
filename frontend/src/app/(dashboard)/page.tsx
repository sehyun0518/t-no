"use client"

import { HeroSection } from "@/components/home/hero-section"
import { RecentThesisSection } from "@/components/home/recent-thesis-section"
import { RecommendedThesisSection } from "@/components/home/recommended-thesis-section"

export default function HomePage() {
  // Mock state to demonstrate both "Empty" and "Recent" states if needed
  const hasRecentPapers = true;

  return (
    <div className="flex flex-col min-h-full relative bg-gray-500">
      <HeroSection />

      {/* Main Content Area: Rounded Top Container */}
      <div className="bg-white rounded-t-[3.75rem] -mt-[6.25rem] min-h-[50rem] relative z-10 w-full shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
         <div className="max-w-[60rem] mx-auto px-8 py-[6.25rem] flex flex-col gap-[10rem]">
            <RecentThesisSection hasRecentPapers={hasRecentPapers} />
            <RecommendedThesisSection />
         </div>
      </div>
    </div>
  )
}

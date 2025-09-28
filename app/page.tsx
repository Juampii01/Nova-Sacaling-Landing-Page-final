import { ScrollProgress } from "@/components/scroll-progress"
import { StickyHeader } from "@/components/sticky-header"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { ProblemSolution } from "@/components/problem-solution"
import { MethodologySection } from "@/components/methodology-section"
import { DifferentiatorsSection } from "@/components/differentiators-section"
import { TargetAudience } from "@/components/target-audience"
import { AuthoritySection } from "@/components/authority-section"
import { CasesSection } from "@/components/cases-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <StickyHeader />

      <HeroSection />
      <VideoSection />
      <ProblemSolution />
      <MethodologySection />
      <DifferentiatorsSection />
      <TargetAudience />
      <AuthoritySection />
      <CasesSection />
      <FAQSection />
      <FinalCTA />

      <Footer />
      <BackToTop />
    </main>
  )
}

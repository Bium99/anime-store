import { Header } from "@/components/layout/header"
import { BackgroundGrid } from "@/components/background-grid"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { CustomOrder } from "@/components/custom-order"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <BackgroundGrid />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <Features />
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Create Your Custom Anime Figure</h2>
              <CustomOrder />
            </div>
          </section>
        </main>
        <footer className="border-t border-white/10 py-8">
          <div className="container mx-auto px-4 text-center text-white/60">
            <p>&copy; 2024 Bium&Paul. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}


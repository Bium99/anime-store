import { Button } from "@/components/ui/button"
import { ModelViewer } from "./model-viewer"

export function HeroSection() {
  return (
    <div className="min-h-screen relative pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              3D Printed Art.
              <span className="block text-blue-400">For Anime Fans.</span>
            </h1>
            <p className="text-xl text-white/80">
              From concept to creation, we bring your favorite characters to life with cutting-edge 3D printing technology.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Explore Models
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Custom Order
              </Button>
            </div>
          </div>
          <div className="lg:ml-auto">
            <ModelViewer />
          </div>
        </div>
      </div>
    </div>
  )
}


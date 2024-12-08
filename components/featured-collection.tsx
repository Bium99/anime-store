import { Button } from "@/components/ui/button"

export function FeaturedCollection() {
  return (
    <div className="bg-[#edf2f7] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748]">
              Studio Ghibli Collection
            </h2>
            <p className="text-lg text-[#4a5568]">
              Immerse yourself in the enchanting world of Studio Ghibli with our exclusive collection of figures, art prints, and accessories.
            </p>
            <Button size="lg" className="bg-[#4299e1] text-white hover:bg-[#3182ce] transition-colors">
              Explore Collection
            </Button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Studio Ghibli Collection"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


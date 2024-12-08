import { PrinterIcon as Printer3d, Palette, CuboidIcon as Cube, Zap } from 'lucide-react'

const features = [
  {
    icon: Printer3d,
    title: "High-Quality Printing",
    description: "State-of-the-art 3D printers for exceptional detail and finish"
  },
  {
    icon: Palette,
    title: "Custom Painting",
    description: "Professional hand-painting for authentic anime aesthetics"
  },
  {
    icon: Cube,
    title: "Custom Models",
    description: "Turn your ideas into reality with our custom modeling service"
  },
  {
    icon: Zap,
    title: "Fast Production",
    description: "Quick turnaround times without compromising quality"
  }
]

export function Features() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


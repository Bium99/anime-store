import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube, Printer, PaintbrushIcon as Paint, Package } from 'lucide-react'

const steps = [
  { icon: Cube, title: "3D Modeling", description: "We create or source high-quality 3D models of your favorite anime characters." },
  { icon: Printer, title: "3D Printing", description: "Using state-of-the-art printers, we bring the digital models to life with precision." },
  { icon: Paint, title: "Finishing", description: "Our artists meticulously paint and finish each figure to capture every detail." },
  { icon: Package, title: "Packaging", description: "Your figure is carefully packaged to ensure it arrives in perfect condition." },
]

export function PrintingProcess() {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our 3D Printing Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <step.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


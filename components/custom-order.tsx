import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CustomOrder() {
  const [orderStep, setOrderStep] = useState(1)

  const nextStep = () => setOrderStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setOrderStep(prev => Math.max(prev - 1, 1))

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Custom Order</h2>
      {orderStep === 1 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="character" className="text-white">Character Name</Label>
            <Input id="character" placeholder="e.g. Naruto Uzumaki" className="bg-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="anime" className="text-white">Anime/Series</Label>
            <Input id="anime" placeholder="e.g. Naruto" className="bg-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="pose" className="text-white">Desired Pose</Label>
            <Input id="pose" placeholder="e.g. Battle stance" className="bg-white/20 text-white" />
          </div>
        </div>
      )}
      {orderStep === 2 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="size" className="text-white">Size</Label>
            <Select>
              <SelectTrigger className="bg-white/20 text-white">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (15cm)</SelectItem>
                <SelectItem value="medium">Medium (25cm)</SelectItem>
                <SelectItem value="large">Large (35cm)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="material" className="text-white">Material</Label>
            <Select>
              <SelectTrigger className="bg-white/20 text-white">
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pla">PLA</SelectItem>
                <SelectItem value="abs">ABS</SelectItem>
                <SelectItem value="resin">Resin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="finish" className="text-white">Finish</Label>
            <Select>
              <SelectTrigger className="bg-white/20 text-white">
                <SelectValue placeholder="Select finish" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="matte">Matte</SelectItem>
                <SelectItem value="glossy">Glossy</SelectItem>
                <SelectItem value="metallic">Metallic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
      {orderStep === 3 && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="details" className="text-white">Additional Details</Label>
            <Textarea id="details" placeholder="Any specific details or requests..." className="bg-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" className="bg-white/20 text-white" />
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-between">
        {orderStep > 1 && (
          <Button onClick={prevStep} variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Previous
          </Button>
        )}
        {orderStep < 3 ? (
          <Button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 ml-auto">
            Next
          </Button>
        ) : (
          <Button className="bg-green-500 hover:bg-green-600 ml-auto">
            Submit Order
          </Button>
        )}
      </div>
    </div>
  )
}


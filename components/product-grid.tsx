import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number
  image: string
  anime: string
  material: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Naruto Uzumaki Action Pose",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    anime: "Naruto",
    material: "PLA+"
  },
  {
    id: "2",
    name: "Mikasa Ackerman Battle Stance",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    anime: "Attack on Titan",
    material: "Resin"
  },
  {
    id: "3",
    name: "Monkey D. Luffy Gear 4",
    price: 109.99,
    image: "/placeholder.svg?height=300&width=300",
    anime: "One Piece",
    material: "PLA+"
  },
  {
    id: "4",
    name: "Rem Crystal Dress Version",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    anime: "Re:Zero",
    material: "Resin"
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden">
          <CardContent className="p-0">
            <Link href={`/product/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{product.anime}</Badge>
              <Badge variant="outline">{product.material}</Badge>
            </div>
            <Link href={`/product/${product.id}`} className="font-semibold text-lg hover:underline">
              {product.name}
            </Link>
            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              <Button>Add to Cart</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


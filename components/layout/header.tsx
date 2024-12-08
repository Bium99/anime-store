import Link from "next/link"
import { Search, ShoppingCart, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Bium<span className="text-blue-400">&</span>Paul
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/models" className="text-white/80 hover:text-white transition-colors">
              3D Models
            </Link>
            <Link href="/custom" className="text-white/80 hover:text-white transition-colors">
              Custom Print
            </Link>
            <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black/95 border-white/10">
                <nav className="flex flex-col gap-4">
                  <Link href="/models" className="text-lg text-white/80 hover:text-white">3D Models</Link>
                  <Link href="/custom" className="text-lg text-white/80 hover:text-white">Custom Print</Link>
                  <Link href="/gallery" className="text-lg text-white/80 hover:text-white">Gallery</Link>
                  <Link href="/about" className="text-lg text-white/80 hover:text-white">About</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}


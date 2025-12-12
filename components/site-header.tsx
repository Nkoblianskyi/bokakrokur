import Link from "next/link"
import { BookOpen, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">Bókakrókur</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Forsíða
          </Link>
          <Link href="/safn" className="text-sm font-medium transition-colors hover:text-primary">
            Bókasafn
          </Link>
          <Link href="/vidburdir" className="text-sm font-medium transition-colors hover:text-primary">
            Viðburðir
          </Link>
          <Link href="/um-okkur" className="text-sm font-medium transition-colors hover:text-primary">
            Um okkur
          </Link>
          <Link href="/hafa-samband" className="text-sm font-medium transition-colors hover:text-primary">
            Hafa samband
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Opna valmynd</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Forsíða
              </Link>
              <Link href="/safn" className="text-sm font-medium transition-colors hover:text-primary">
                Bókasafn
              </Link>
              <Link href="/vidburdir" className="text-sm font-medium transition-colors hover:text-primary">
                Viðburðir
              </Link>
              <Link href="/um-okkur" className="text-sm font-medium transition-colors hover:text-primary">
                Um okkur
              </Link>
              <Link href="/hafa-samband" className="text-sm font-medium transition-colors hover:text-primary">
                Hafa samband
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

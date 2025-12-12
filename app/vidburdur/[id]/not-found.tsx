import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Viðburður fannst ekki</h1>
          <p className="text-muted-foreground mb-6">
            Viðburðurinn sem þú leitar að er ekki til eða hefur verið fjarlægður.
          </p>
          <Button asChild>
            <Link href="/vidburdir">Fara í viðburði</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

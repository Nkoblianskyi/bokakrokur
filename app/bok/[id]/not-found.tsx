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
          <h1 className="text-4xl font-bold mb-4">Bók fannst ekki</h1>
          <p className="text-muted-foreground mb-6">Bókin sem þú leitar að er ekki til eða hefur verið fjarlægð.</p>
          <Button asChild>
            <Link href="/safn">Fara í bókasafnið</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

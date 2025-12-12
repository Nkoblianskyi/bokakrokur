import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-semibold">Bókakrókur</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Þitt rými til að uppgötva og deila ástríðu fyrir lestri.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Valmynd</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Forsíða
                </Link>
              </li>
              <li>
                <Link href="/um-okkur" className="text-muted-foreground hover:text-primary transition-colors">
                  Um okkur
                </Link>
              </li>
              <li>
                <Link href="/hafa-samband" className="text-muted-foreground hover:text-primary transition-colors">
                  Hafa samband
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Lögfræðilegt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/personuverndarstefna"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Persónuverndarstefna
                </Link>
              </li>
              <li>
                <Link href="/vafrakokustefna" className="text-muted-foreground hover:text-primary transition-colors">
                  Vafrakökustefna
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Hafa samband</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ertu með spurningar? Ekki hika við að{" "}
              <Link href="/hafa-samband" className="text-primary hover:underline">
                hafa samband
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bókakrókur. Öll réttindi áskilin.</p>
        </div>
      </div>
    </footer>
  )
}

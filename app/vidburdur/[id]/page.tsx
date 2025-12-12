import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { mockEvents } from "@/lib/mock-events"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface EventPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return mockEvents.map((event) => ({
    id: event.id,
  }))
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = mockEvents.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  const availableSpots = event.capacity - event.registered
  const occupancyPercentage = (event.registered / event.capacity) * 100

  const categoryColors = {
    lestur: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    námskeið: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    kynning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    bókaklúbbur: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/vidburdir">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Til baka í viðburði
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="overflow-hidden sticky top-24">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge className={`capitalize ${categoryColors[event.category]}`}>{event.category}</Badge>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Dagsetning</p>
                        <p className="text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("is-IS", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Tími</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Staðsetning</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium mb-2">Framboð</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              {event.registered}/{event.capacity} skráðir
                            </span>
                            <span className="font-medium">{availableSpots} sæti laus</span>
                          </div>
                          <Progress value={occupancyPercentage} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <Button asChild className="w-full" size="lg" disabled={availableSpots === 0}>
                    {availableSpots === 0 ? <span>Fullbókað</span> : <Link href="/hafa-samband">Bóka sæti</Link>}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-6 text-balance">{event.title}</h1>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Um viðburðinn</h2>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-lg">{event.description}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-semibold mb-4">Mikilvægar upplýsingar</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Vinsamlegast komdu 10 mínútum fyrir upphaf viðburðar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Sætum er úthlutað í röð skráningar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Ef þú getur ekki mætt, vinsamlegast láttu okkur vita fyrirfram.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Allir viðburðir eru ókeypis fyrir meðlimi samfélagsins.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Ertu með spurningar?</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Ef þú hefur einhverjar spurningar um þennan viðburð, ekki hika við að hafa samband. Við gleðjumst
                      yfir að aðstoða þig.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/hafa-samband">Senda fyrirspurn</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

"use client"

import { useState, useMemo } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockEvents, eventCategories } from "@/lib/mock-events"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function VidburdirPage() {
  const [selectedCategory, setSelectedCategory] = useState("allt")

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "allt") return mockEvents
    return mockEvents.filter((event) => event.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Bókmenntaviðburðir
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Taktu þátt í viðburðum okkar og tengstu öðrum bókaunnendum
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-muted/30">
          <div className="container">
            <div className="max-w-md mx-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Velja tegund" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {selectedCategory === "allt"
                  ? "Allir viðburðir"
                  : eventCategories.find((c) => c.value === selectedCategory)?.label}
              </h2>
              <p className="text-muted-foreground">
                {filteredEvents.length} {filteredEvents.length === 1 ? "viðburður" : "viðburðir"} í boði
              </p>
            </div>

            <div className="space-y-8">
              {filteredEvents.map((event, index) => {
                const isEven = index % 2 === 0
                const availableSpots = event.capacity - event.registered
                return (
                  <div
                    key={event.id}
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-6 bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="relative w-full lg:w-2/5 h-64 lg:h-auto flex-shrink-0">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4">{event.category}</Badge>
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-balance">{event.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 flex-shrink-0" />
                            <span>{availableSpots > 0 ? `${availableSpots} sæti laus` : "Fullbókað"}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-6">
                        <Button asChild className="flex-1 sm:flex-initial">
                          <Link href={`/vidburdur/${event.id}`}>Sjá nánar</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 sm:flex-initial bg-transparent">
                          <Link href="/hafa-samband">Bóka sæti</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

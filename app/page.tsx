"use client"

import type React from "react"
import { useState } from "react"
import { BookCard } from "@/components/book-card"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, Users, Star, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { books } from "@/lib/mock-books"
import { events } from "@/lib/mock-events"
import Image from "next/image"
import Link from "next/link"
import { SuccessDialog } from "@/components/success-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const featuredBooks = books.slice(0, 4)
  const upcomingEvents = events.slice(0, 3)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShowSuccessDialog(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setShowSuccessDialog(false), 3000)
  }

  return (
    <div className="flex flex-col">
      <SiteHeader />
      {/* Hero Section - Completely New Design */}
      <section className="relative bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Spans 5 columns */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-block">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Opið alla daga
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block mb-2">Velkomin í</span>
                <span className="block text-primary">Bókakrók</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Þitt notalega bókasafn í hjarta Reykjavíkur. Uppgötvaðu íslenskar bókmenntir, komdu á viðburði og njóttu
                góðs kaffis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base" asChild>
                  <Link href="/safn">
                    Skoða safnið
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent" asChild>
                  <Link href="/um-okkur">Um okkur</Link>
                </Button>
              </div>
            </div>

            {/* Right Image Area - Spans 7 columns */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-main-icelandic-library-wide.jpg"
                  alt="Bókakrókur bókasafn"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Simple overlay text */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
                    Notalegt umhverfi fyrir bókaunnendur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-3">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Vinsælustu bækurnar
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Uppgötvaðu bestu bækurnar</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Handvaldar bækur frá íslenskum höfundum og klassískum verkum úr bókmenntaarfinum
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="hidden md:flex bg-transparent">
              <Link href="/safn">
                Sjá allt safnið
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button variant="outline" size="lg" asChild>
              <Link href="/safn">
                Sjá allt safnið
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-3">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Væntanlegir viðburðir
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Komdu í heimsókn</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Bókaklúbbar, rithöfundalestur og menningarviðburðir fyrir alla
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="hidden md:flex bg-transparent">
              <Link href="/vidburdir">
                Allir viðburðir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button variant="outline" size="lg" asChild>
              <Link href="/vidburdir">
                Allir viðburðir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/about-cozy-interior-iceland.jpg" alt="Inni í Bókakrók" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Um okkur
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Þar sem bókaelska blasir við</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Bókakrókur er meira en bókasafn - við erum samfélag bókaunnenda sem deila ástríðu fyrir íslenskum
                bókmenntum og alþjóðlegum sögum.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Vandað bókasafn</h3>
                    <p className="text-muted-foreground">
                      Yfir 500 vandaðar bækur frá íslenskum og alþjóðlegum höfundum
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lifandi samfélag</h3>
                    <p className="text-muted-foreground">Taktu þátt í bókaklúbbum, umræðum og sérstökum viðburðum</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Notalegt umhverfi</h3>
                    <p className="text-muted-foreground">Þægilegir lestrarkrókar og rólegt rými fyrir djúplestur</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link href="/um-okkur">
                  Kynntu þér meira
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 bg-white/20 border-white/30 text-white"
            >
              <Sparkles className="h-4 w-4" />
              Byrjaðu núna
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight text-balance">
              Tilbúinn að taka þátt í bókasamfélaginu?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
              Komdu í heimsókn, skoðaðu safnið okkar og finndu næstu uppáhaldsbókina þína í dag
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg" asChild>
                <Link href="/safn">Skoða bókasafnið</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg bg-transparent border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/hafa-samband">Hafa samband</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
      <SiteFooter />
    </div>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Phone, Send } from "lucide-react"
import { SuccessDialog } from "@/components/success-dialog"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HafaSambandPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setShowSuccessDialog(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setShowSuccessDialog(false), 3000)
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb,59,130,246),0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(var(--accent-rgb,16,185,129),0.08),transparent_70%)]" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 text-primary mb-4">
                <Mail className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Hafa samband</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                Ertu með spurningar um Bókakrók? Við erum hér til að hjálpa þér
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="lg:sticky lg:top-8">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Sendu okkur skilaboð</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Fylltu út formið hér að neðan og við svörum innan 24 klukkustunda
                    </p>
                  </div>

                  <Card className="p-8 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Fullt nafn *
                          </label>
                          <Input
                            id="name"
                            placeholder="Jón Jónsson"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Netfang *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jon@example.is"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Efni *
                        </label>
                        <Input
                          id="subject"
                          placeholder="Um hvað snýst fyrirspurnin?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Skilaboð *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Skrifaðu skilaboðin þín hér..."
                          rows={7}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sendi skilaboð...</>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Senda skilaboð
                          </>
                        )}
                      </Button>
                    </form>
                  </Card>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/contact-reception-desk-iceland.jpg"
                    alt="Móttökuborð Bókakróks"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-3xl font-bold mb-3">Velkomin í Bókakrók</h3>
                    <p className="text-white/95 text-lg">Lestrarsal þitt í hjarta Reykjavíkur</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 hover:shadow-xl transition-all duration-300 border-primary/20">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Netfang</h3>
                        <a
                          href="mailto:hallo@bokakrokur.is"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hallo@bokakrokur.is
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 p-6 hover:shadow-xl transition-all duration-300 border-accent/20">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Sími</h3>
                        <a
                          href="tel:+3541234567"
                          className="text-muted-foreground hover:text-accent-foreground transition-colors"
                        >
                          +354 123 4567
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Staðsetning</h3>
                        <p className="text-muted-foreground">Laugavegur 123</p>
                        <p className="text-muted-foreground">101 Reykjavík, Ísland</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-primary/10 p-6 hover:shadow-xl transition-all duration-300 border-accent/20">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Opnunartími</h3>
                        <p className="text-muted-foreground">Mánudagur - Föstudagur</p>
                        <p className="text-muted-foreground font-medium">9:00 - 21:00</p>
                        <p className="text-muted-foreground mt-2">Laugardagur - Sunnudagur</p>
                        <p className="text-muted-foreground font-medium">10:00 - 18:00</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SuccessDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} />
      </main>
      <SiteFooter />
    </>
  )
}

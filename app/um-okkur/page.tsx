import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Coffee, Calendar, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function UmOkkurPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src="/about-hero-icelandic-library.jpg"
            alt="Bókakrókur - Rólegt lestrarrými"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container text-center text-white space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Um Bókakrók</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-pretty">
                Rólegt og notalegt rými hannað fyrir bókaunnendur og bókmenntaáhugafólk
              </p>
            </div>
          </div>
        </section>

        <div className="container py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Saga okkar</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                  Bókakrókur var stofnaður með einföldum markmiði: að skapa fullkomið rými fyrir lestur og bókmenntir
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="/about-cozy-interior-iceland.jpg"
                      alt="Notalegt innra rými"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Hannað fyrir lestur</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hvert smáatriði í lestrarsal okkar hefur verið vandlega valið til að skapa bestu
                      lestrarupplifunina. Frá þægilegum sætum til fullkomins ljóss, við hugsum um allt.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src="/about-community-gathering.jpg" alt="Samfélagsrými" fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Bókmenntasamfélag</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Meira en bara lestur - við byggjum samfélag bókaunnenda sem deila ástríðu sinni fyrir bókmenntum í
                      gegnum viðburði, bókaklúbba og menningarlega reynslu.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8 text-center">Heimspeki okkar</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg">Ástríða fyrir bókum</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Við trúum á kraft bókmenntanna til að umbreyta, mennta og innblása
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent-foreground mb-2">
                      <Users className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg">Samfélag fyrst</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Að skapa velkomið rými þar sem lesendur geta tengst og deilt upplifunum
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg">Þægindi og notalegheit</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Að bjóða upp á notalegt umhverfi þar sem hver stund skiptir máli
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Rýmið okkar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src="/space-cozy-reading-nook.jpg"
                      alt="Notalegir lestrarkrókar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Notalegir krókar</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Náin rými með mjúkum sætum og góðu ljósi fyrir einbeittan lestur
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image src="/space-bookshelf-collection.jpg" alt="Víðtækt bókasafn" fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Víðtækt safn</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Þúsundir titla á íslensku og erlendum tungumálum í öllum flokkum
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image src="/space-community-area.jpg" alt="Samfélagssvæði" fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Samfélagsrými</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Opinn salur fyrir viðburði, bókaklúbba og menningarlegar samkomur
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src="/space-natural-light-windows.jpg"
                      alt="Náttúrulegt ljós"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Náttúrulegt ljós</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Stórir gluggar með útsýni yfir Reykjavík fyrir fullkomið lestrarrými
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image src="/space-book-cafe.jpg" alt="Bókakaffi" fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Bókakaffi</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Njóttu íslensku kaffis, te og smárétta á meðan þú lest
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-56">
                    <Image src="/space-study-area.jpg" alt="Námssvæði" fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2">Námssvæði</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Rúmgóð borð og rólegt umhverfi fyrir nám og einbeitingu
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Yfir 5.000 titlar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Víðtækt safn íslenskra og erlendra bókmennta í öllum flokkum
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <Coffee className="h-10 w-10 text-accent-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Kaffi innifalið</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ókeypis kaffi, te og vötn fyrir alla gesti lestrarsalsins
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Viðburðir</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bókaklúbbar, höfundakynningar og ritunarnámskeið reglulega
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <Clock className="h-10 w-10 text-accent-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Opið daglega</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mánudag til sunnudag frá 9:00 til 21:00 fyrir þinn þægindi
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Miðsvæðis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Í hjarta Reykjavíkur með auðveldan aðgang og bílastæði
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <Calendar className="h-10 w-10 text-accent-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bókun</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bókaðu uppáhalds sætið þitt eða einkarými fyrir hópa
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Komdu í heimsókn</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                  Upplifðu töfra Bókakróks sjálfur. Hvort sem þú leitar að rólegu plássi til einbeitingar eða vilt taka
                  þátt í bókmenntasamfélaginu okkar, þá er þér alltaf velkomið.
                </p>
                <p className="text-muted-foreground">
                  Þú þarft ekki að bóka - komdu bara við og finndu þinn fullkomna krók!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function VafrakokustefnaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-balance">Vafrakökustefna</h1>
            <p className="text-muted-foreground mb-8">
              Síðast uppfært:{" "}
              {new Date().toLocaleDateString("is-IS", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <Card>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>Hvað eru vafrakökur?</h2>
                <p className="leading-relaxed">
                  Vafrakökur eru litlar textaskrár sem eru geymdar á tækinu þínu þegar þú heimsækir vefsíðu. Þær eru
                  mikið notaðar til að láta vefsíður virka á skilvirkari hátt og veita upplýsingar til eigenda síðunnar.
                </p>

                <h2>Hvernig við notum vafrakökur</h2>
                <p className="leading-relaxed">
                  Hjá Bókakrók notum við vafrakökur til að bæta vafraupplifun þína og skilja hvernig þú notar vefsíðu
                  okkar. Vafrakökur hjálpa okkur að:
                </p>
                <ul>
                  <li>Muna kjörstillingar þínar og stillingar</li>
                  <li>Skilja hvernig þú notar vefsíðu okkar</li>
                  <li>Bæta afköst og virkni síðunnar</li>
                  <li>Sérsníða upplifun notanda</li>
                </ul>

                <h2>Tegundir vafrakaka sem við notum</h2>

                <h3>Nauðsynlegar vafrakökur</h3>
                <p className="leading-relaxed">
                  Þessar vafrakökur eru nauðsynlegar til að vefsíðan virki rétt. Þær innihalda vafrakökur sem leyfa þér
                  aðgang að öruggum svæðum vefsíðunnar og muna kjörstillingar þínar varðandi vafrakökur.
                </p>

                <h3>Afkastakökur</h3>
                <p className="leading-relaxed">
                  Þessar vafrakökur gera okkur kleift að þekkja og telja fjölda gesta og sjá hvernig gestir fara um
                  vefsíðuna. Þetta hjálpar okkur að bæta hvernig vefsíðan virkar.
                </p>

                <h3>Virknikökur</h3>
                <p className="leading-relaxed">
                  Þessar vafrakökur eru notaðar til að þekkja þig þegar þú kemur aftur á vefsíðuna. Þetta gerir okkur
                  kleift að sérsníða efni fyrir þig og muna kjörstillingar þínar.
                </p>

                <h3>Greiningarkökur</h3>
                <p className="leading-relaxed">
                  Við notum greiningarkökur til að skilja hvernig gestir hafa samskipti við vefsíðu okkar. Þessar
                  vafrakökur hjálpa okkur að bæta upplifun notanda með því að veita upplýsingar um svæði sem heimsótt
                  eru, tíma á síðunni og vandamál sem upp komu.
                </p>

                <h2>Stjórnun vafrakaka</h2>
                <p className="leading-relaxed">
                  Þú getur stjórnað og/eða eytt vafrakökum eins og þú vilt. Þú getur eytt öllum vafrakökum sem eru þegar
                  á tækinu þínu og þú getur stillt flesta vafra til að koma í veg fyrir að þær séu settar. Hins vegar,
                  ef þú gerir þetta, gætir þú þurft að stilla handvirkt sumar kjörstillingar í hvert sinn sem þú
                  heimsækir síðu og sum þjónusta og virkni virkar ekki.
                </p>

                <h2>Vafrakökur þriðja aðila</h2>
                <p className="leading-relaxed">
                  Sumir samstarfsaðilar okkar geta sett vafrakökur á tækið þitt þegar þú heimsækir vefsíðu okkar. Þessar
                  vafrakökur þriðja aðila geta falið í sér greiningarþjónustu og samfélagsmiðla. Við höfum ekki stjórn á
                  þessum vafrakökum og mælum með því að þú skoðir persónuverndarstefnu þessara þriðja aðila.
                </p>

                <h2>Breytingar á þessari stefnu</h2>
                <p className="leading-relaxed">
                  Við getum uppfært þessa vafrakökustefnu af og til til að endurspegla breytingar á starfsemi okkar eða
                  af öðrum rekstrarlegum, lagalegum eða reglugerðarástæðum. Við mælum með því að þú skoðir þessa síðu
                  reglulega til að vera upplýstur um hvernig við notum vafrakökur.
                </p>

                <h2>Hafa samband</h2>
                <p className="leading-relaxed">
                  Ef þú hefur einhverjar spurningar um vafrakökustefnu okkar, vinsamlegast hafðu samband við okkur í
                  gegnum samskiptasíðu okkar eða sendu tölvupóst á hallo@bokakrokur.com.
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

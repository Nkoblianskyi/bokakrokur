import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PersonuverndarstefnaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-balance">Persónuverndarstefna</h1>
            <p className="text-muted-foreground mb-8">
              Síðast uppfært:{" "}
              {new Date().toLocaleDateString("is-IS", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <Card>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none p-8">
                <h2>Inngangur</h2>
                <p className="leading-relaxed">
                  Hjá Bókakrók tökum við persónuvernd notenda okkar mjög alvarlega. Þessi persónuverndarstefna lýsir því
                  hvernig við söfnum, notum, deilum og verndum persónuupplýsingar þínar þegar þú notar vefsíðu okkar.
                </p>

                <h2>Upplýsingar sem við söfnum</h2>

                <h3>Upplýsingar sem þú veitir okkur</h3>
                <p className="leading-relaxed">
                  Við getum safnað persónuupplýsingum sem þú veitir okkur beint, þar á meðal:
                </p>
                <ul>
                  <li>Nafn</li>
                  <li>Netfang</li>
                  <li>Samskiptaupplýsingar</li>
                  <li>Athugasemdir og umsagnir sem þú birtir</li>
                  <li>Aðrar upplýsingar sem þú velur að deila með okkur</li>
                </ul>

                <h3>Upplýsingar sem safnast sjálfkrafa</h3>
                <p className="leading-relaxed">
                  Þegar þú heimsækir vefsíðu okkar getum við safnað sjálfkrafa ákveðnum upplýsingum um tæki þitt og
                  notkun þína á síðunni, þar á meðal:
                </p>
                <ul>
                  <li>IP-tala</li>
                  <li>Tegund vafra og útgáfa</li>
                  <li>Stýrikerfi</li>
                  <li>Síður sem heimsóttar voru og tími</li>
                  <li>Tilvísunaruppspretta</li>
                </ul>

                <h2>Hvernig við notum upplýsingar þínar</h2>
                <p className="leading-relaxed">Við notum upplýsingarnar sem við söfnum til að:</p>
                <ul>
                  <li>Veita, viðhalda og bæta þjónustu okkar</li>
                  <li>Svara athugasemdum, spurningum og beiðnum þínum</li>
                  <li>Senda tæknilegar upplýsingar, uppfærslur og stjórnunarskilaboð</li>
                  <li>Sérsníða upplifun þína á vefsíðunni</li>
                  <li>Greina þróun og notkun vefsíðunnar</li>
                  <li>Greina, koma í veg fyrir og takast á við tæknileg og öryggismál</li>
                </ul>

                <h2>Deiling upplýsinga</h2>
                <p className="leading-relaxed">
                  Við seljum ekki, leigum eða deilum persónuupplýsingum þínum með þriðja aðila í markaðslegum tilgangi
                  án skýlauss samþykkis þíns. Við getum deilt upplýsingum þínum við eftirfarandi aðstæður:
                </p>
                <ul>
                  <li>Með þjónustuveitendum sem hjálpa okkur að reka vefsíðuna</li>
                  <li>Til að uppfylla lagalegar skyldur</li>
                  <li>Til að vernda réttindi okkar, friðhelgi, öryggi eða eignir</li>
                  <li>Í tengslum við samruna, sölu eða yfirfærslu eigna</li>
                </ul>

                <h2>Gagnaöryggi</h2>
                <p className="leading-relaxed">
                  Við innleiðum viðeigandi tæknilegar og skipulagslegar öryggisráðstafanir til að vernda
                  persónuupplýsingar þínar gegn óheimilum aðgangi, breytingum, birtingu eða eyðileggingu. Hins vegar er
                  engin aðferð við sendingu um internetið eða rafræna geymslu 100% örugg.
                </p>

                <h2>Varðveisla gagna</h2>
                <p className="leading-relaxed">
                  Við varðveitum persónuupplýsingar þínar aðeins eins lengi og nauðsynlegt er til að uppfylla tilganginn
                  sem lýst er í þessari persónuverndarstefnu, nema lög krefjist eða leyfi lengri varðveislutíma.
                </p>

                <h2>Réttindi þín</h2>
                <p className="leading-relaxed">
                  Allt eftir staðsetningu þinni gætir þú haft ákveðin réttindi varðandi persónuupplýsingar þínar, þar á
                  meðal:
                </p>
                <ul>
                  <li>Rétt til aðgangs að persónuupplýsingum þínum</li>
                  <li>Rétt til að leiðrétta ónákvæmar upplýsingar</li>
                  <li>Rétt til að óska eftir eyðingu upplýsinga</li>
                  <li>Rétt til að takmarka eða andmæla vinnslu</li>
                  <li>Rétt til gagnaflytjanleika</li>
                  <li>Rétt til að afturkalla samþykki</li>
                </ul>

                <h2>Vafrakökur og svipaðar tækni</h2>
                <p className="leading-relaxed">
                  Við notum vafrakökur og svipaðar tækni til að bæta upplifun þína á vefsíðunni. Fyrir frekari
                  upplýsingar skaltu skoða vafrakökustefnu okkar.
                </p>

                <h2>Tenglar á aðrar vefsíður</h2>
                <p className="leading-relaxed">
                  Vefsíða okkar getur innihaldið tengla á vefsíður þriðja aðila. Við berum ekki ábyrgð á
                  persónuverndarvenjum þessara síðna. Við mælum með því að þú lesir persónuverndarstefnu hverrar síðu
                  sem þú heimsækir.
                </p>

                <h2>Breytingar á þessari stefnu</h2>
                <p className="leading-relaxed">
                  Við getum uppfært þessa persónuverndarstefnu af og til. Við munum láta þig vita af öllum breytingum
                  með því að birta nýju stefnuna á þessari síðu og uppfæra dagsetninguna „Síðast uppfært".
                </p>

                <h2>Hafa samband</h2>
                <p className="leading-relaxed">
                  Ef þú hefur einhverjar spurningar um þessa persónuverndarstefnu eða hvernig við meðhöndlum
                  persónuupplýsingar þínar, vinsamlegast hafðu samband við okkur í gegnum samskiptasíðu okkar eða sendu
                  tölvupóst á hallo@bokakrokur.is.
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

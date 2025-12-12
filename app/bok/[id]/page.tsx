import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, BookOpen, ArrowLeft, User, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { mockBooks } from "@/lib/mock-books"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface BookPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return mockBooks.map((book) => ({
    id: book.id,
  }))
}

export default async function BookPage({ params }: BookPageProps) {
  const { id } = await params
  const book = mockBooks.find((b) => b.id === id)

  if (!book) {
    notFound()
  }

  const averageRating = book.rating
  const totalReviews = book.reviews.length

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b bg-muted/30">
          <div className="container py-6">
            <Button variant="ghost" asChild className="mb-4 -ml-4">
              <Link href="/safn">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Til baka í safnið
              </Link>
            </Button>
            <Badge variant="secondary" className="mb-3 capitalize text-sm">
              {book.genre}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">{book.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-lg">{book.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="text-lg font-semibold text-foreground">{averageRating}</span>
                <span className="text-sm">
                  ({totalReviews} {totalReviews === 1 ? "umsögn" : "umsagnir"})
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <Card className="overflow-hidden">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-muted to-muted/50">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={`Kápa bókarinnar ${book.title}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookMarked className="h-5 w-5" />
                      Upplýsingar um bókina
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Útgáfuár</p>
                        <p className="font-semibold">{book.publishedYear}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Blaðsíður</p>
                        <p className="font-semibold">{book.pages}</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">ISBN</p>
                      <p className="font-mono text-sm">{book.isbn}</p>
                    </div>

                    <Separator />

                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Flokkur</p>
                      <Badge variant="outline" className="capitalize">
                        {book.genre}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Button asChild className="w-full" size="lg">
                  <Link href="/hafa-samband">Athuga framboð</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Samantekt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-lg">{book.description}</p>
                </CardContent>
              </Card>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Umsagnir lesenda</h2>
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="font-bold text-lg">{averageRating}</span>
                    <span className="text-muted-foreground text-sm">/ 5</span>
                  </div>
                </div>

                {book.reviews.length > 0 ? (
                  <div className="grid gap-4">
                    {book.reviews.map((review) => (
                      <Card key={review.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-lg font-semibold">{review.author}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-1">
                                {new Date(review.date).toLocaleDateString("is-IS", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-1.5 bg-accent/10 px-3 py-1.5 rounded-full shrink-0">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="font-bold">{review.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-16 text-center">
                      <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-muted-foreground text-lg">Engar umsagnir enn fyrir þessa bók.</p>
                      <p className="text-muted-foreground text-sm mt-2">Vertu fyrstur til að deila skoðun þinni!</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

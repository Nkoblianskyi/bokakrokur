import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bókakrókur - Lestrarsal á Íslandi",
  description:
    "Uppgötvaðu, kannaðu og deildu ástríðu þinni fyrir bókum. Umsagnir, ráðleggingar og samfélag lesenda á Íslandi.",
  metadataBase: new URL("https://bokakrokur.com"),
  openGraph: {
    title: "Bókakrókur - Lestrarsal á Íslandi",
    description:
      "Uppgötvaðu, kannaðu og deildu ástríðu þinni fyrir bókum. Umsagnir, ráðleggingar og samfélag lesenda á Íslandi.",
    url: "https://bokakrokur.com",
    siteName: "Bókakrókur",
    locale: "is_IS",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="is">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}

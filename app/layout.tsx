import "@mantine/core/styles.css"
import "styles/global.css"
import "styles/rpg-awesome.css"

import { Shell } from "@/components/layouts/Shell"
import { yandex } from "@/utils/vendor/yandex"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { Metadata } from "next"
import { theme } from "../theme"

import src from "@/public/bg/fl-map_en.png"

export const metadata: Metadata = {
  title: "Запретные земли",
  description: "Генераторы для НРИ Запретные земли",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Forbidden lands",
    "Запретные земли",
    "НРИ",
    "Генератор",
    "Генератор мест",
    "Генератор мест Запретные земли",
  ],
  creator: "Kirill Klenov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <script dangerouslySetInnerHTML={{ __html: yandex }} />
      </head>
      <body
        style={{
          backgroundImage: `url(${src.src})`,
        }}
      >
        <MantineProvider theme={theme}>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  )
}

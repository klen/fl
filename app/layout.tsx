import {
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  Group,
  MantineProvider,
  Title,
} from "@mantine/core"
import "@mantine/core/styles.css"
import { Metadata } from "next"
import { headers } from "next/headers"
import "styles/global.css"
import "styles/rpg-awesome.css"
import { theme } from "../theme"

export const metadata: Metadata = {
  title: "Запретные земли",
  description: "Генератор мест для НРИ Запретные земли",
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
  const headersList = headers()
  const pathname = headersList.get("x-next-pathname") || ""
  console.log(999, pathname)

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 60 }}>
            <AppShellHeader
              px="lg"
              style={{ borderBottom: "2px solid var(--mantine-color-dark-9)" }}
            >
              <Group h="100%">
                <Title order={2}>Запретные земли</Title>
                <Group mx="auto">
                  <Anchor href="/place" fw={pathname.startsWith("/place") ? 600 : 400}>
                    Места
                  </Anchor>
                  <i className="ra ra-diamonds" />
                  <Anchor href="/finds" fw={pathname == "/finds" ? 600 : 400}>
                    Находки
                  </Anchor>
                </Group>
              </Group>
            </AppShellHeader>
            <AppShellMain>
              <Container size="sm" p="xl">
                {children}
              </Container>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}

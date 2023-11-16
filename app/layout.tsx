"use client"

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
import { usePathname } from "next/navigation"
import "styles/global.css"
import "styles/rpg-awesome.css"
import { theme } from "../theme"

export default function RootLayout({ children }: { children: any }) {
  const pathname = usePathname()

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

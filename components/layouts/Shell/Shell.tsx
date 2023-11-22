"use client"

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Container,
  Divider,
  Group,
  NavLink,
  Title,
} from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

export function Shell({ children }: PropsWithChildren) {
  const pathname = usePathname()

  const [opened, { toggle }] = useDisclosure()
  const sm = useMediaQuery("(max-width: 768px)")

  return (
    <AppShell
      header={{ height: 50, collapsed: !sm }}
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader px="lg" style={{ borderBottom: "2px solid var(--mantine-color-dark-9)" }}>
        <Group h="100%" wrap="nowrap">
          <Burger opened={opened} onClick={toggle} />
          <Link href="/" style={{ textDecoration: "none", color: "#000" }}>
            <Title order={2}>Запретные земли</Title>
          </Link>
        </Group>
      </AppShellHeader>
      <AppShellNavbar>
        {!sm && (
          <Title order={2} p="md">
            Запретные земли
          </Title>
        )}
        <Divider />
        <NavLink
          href="/place"
          label="Места"
          active={pathname.startsWith("/place")}
          leftSection={<i className="ra ra-tower" />}
        />
        <NavLink
          href="/finds"
          label="Находки"
          active={pathname.startsWith("/finds")}
          leftSection={<i className="ra ra-diamond" />}
        />
        {!sm && <Divider mt="auto" />}
        <NavLink
          href="/"
          label="О проекте"
          active={pathname == "/"}
          leftSection={<i className="ra ra-skull" />}
        />
      </AppShellNavbar>
      <AppShellMain>
        <Container size="sm" py={sm ? "md" : "xl"}>
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  )
}

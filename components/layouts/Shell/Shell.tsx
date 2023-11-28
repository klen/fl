"use client"

import { Favorites } from "@/components/Favorites"
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Container,
  Divider,
  Drawer,
  Group,
  NavLink,
  Title,
} from "@mantine/core"
import { useDisclosure, useMediaQuery } from "@mantine/hooks"
import { IconHeart } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import ClientSide from "../ClientSide"

export function Shell({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const { t } = useTranslation()

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
          label={t("Places")}
          active={pathname.startsWith("/place")}
          leftSection={<i className="ra ra-tower" />}
        />
        <NavLink
          href="/finds"
          label={t("Finds")}
          active={pathname.startsWith("/finds")}
          leftSection={<i className="ra ra-diamond" />}
        />
        <NavLink
          href="/daemon"
          label={t("Demons")}
          active={pathname.startsWith("/daemon")}
          leftSection={<i className="ra ra-tentacle" />}
        />
        <NavLink
          href="/legends"
          label={t("Legends")}
          active={pathname.startsWith("/legends")}
          leftSection={<i className="ra ra-scroll-unfurled" />}
        />
        <NavLink
          href="/characters"
          label={t("Characters")}
          active={pathname.startsWith("/characters")}
          leftSection={<i className="ra ra-player" />}
        />
        {!sm && <Divider mt="auto" />}
        <FavoritesLink />
        <NavLink
          href="/"
          label={t("About")}
          active={pathname == "/"}
          leftSection={<i className="ra ra-skull" />}
        />
      </AppShellNavbar>
      <AppShellMain>
        <Container size="md" py={sm ? "md" : "xl"}>
          {children}
        </Container>
      </AppShellMain>
    </AppShell>
  )
}

function FavoritesLink() {
  const { t } = useTranslation()
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <ClientSide>
      <NavLink active={opened} onClick={open} label={t("Favorites")} leftSection={<IconHeart />} />
      <Drawer
        size="md"
        padding="md"
        opened={opened}
        onClose={close}
        position="right"
        title={t("Favorites")}
      >
        <Favorites />
      </Drawer>
    </ClientSide>
  )
}

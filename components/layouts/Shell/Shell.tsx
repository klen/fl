"use client"

import { Favorites } from "@/components/Favorites"
import { useStorage } from "@/utils"
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
import { IconHeart, IconHeartFilled } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"
import { useTranslation } from "react-i18next"
import ClientSide from "../ClientSide"
import { siteLink } from "@/utils/links"

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
          href={siteLink("/place")}
          label={t("Places")}
          active={pathname.startsWith("/place")}
          leftSection={<i className="ra ra-tower" />}
        />
        <NavLink
          href={siteLink("/finds")}
          label={t("Finds")}
          active={pathname.startsWith("/finds")}
          leftSection={<i className="ra ra-diamond" />}
        />
        <NavLink
          href={siteLink("/daemon")}
          label={t("Demons")}
          active={pathname.startsWith("/daemon")}
          leftSection={<i className="ra ra-tentacle" />}
        />
        <NavLink
          href={siteLink("/legends")}
          label={t("Legends")}
          active={pathname.startsWith("/legends")}
          leftSection={<i className="ra ra-scroll-unfurled" />}
        />
        <NavLink
          href={siteLink("/characters")}
          label={t("Player characters")}
          active={pathname.startsWith("/characters")}
          leftSection={<i className="ra ra-player" />}
        />
        <NavLink
          href={siteLink("/npc")}
          label={t("Master characters")}
          active={pathname.startsWith("/npc")}
          leftSection={<i className="ra ra-player-king" />}
        />
        {!sm && <Divider mt="auto" />}
        <ClientSide>
          <FavoritesLink />
        </ClientSide>
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
  const value = useStorage()[0]
  const hasFavorites = Object.keys(value).length > 0

  return (
    <>
      <NavLink
        active={opened}
        onClick={open}
        label={t("Favorites")}
        leftSection={hasFavorites ? <IconHeartFilled /> : <IconHeart />}
      />
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
    </>
  )
}

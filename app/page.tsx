"use client"

import { FLPaper } from "@/components"
import ClientSide from "@/components/layouts/ClientSide"
import { List, Stack, Text, Title } from "@mantine/core"
import Link from "next/link"

export default function Page() {
  return (
    <ClientSide>
      <FLPaper>
        <Stack gap="lg">
          <Title>Генератор случайного контента для НРИ "Запретные земли"</Title>
          <Stack gap="xs">
            <Title order={2}>Возможности</Title>
            <List>
              <List.Item>
                Генерация <Link href="/finds">находок</Link>
              </List.Item>
              <List.Item>
                Генерация <Link href="/place">точек интереса</Link>
              </List.Item>
            </List>
          </Stack>
          <Stack gap="xs">
            <Title order={2}>Авторские права</Title>
            <Text>
              Права на НРИ "Запретные земли" принадлежат{" "}
              <Link target="_blank" href="https://freeleaguepublishing.com/en/">
                Free League Publishing
              </Link>{" "}
              (Fria Ligan AB).
            </Text>
            <Text>
              Российская локализация НРИ "Запретные земли" принадлежит{" "}
              <Link target="_blank" href="https://studio101.ru/categories/forbidden-lands">
                Студия 101
              </Link>
            </Text>
          </Stack>
          <Text>
            Исходный код проекта доступен на{" "}
            <Link target="_blank" href="https://github.com/klen/fl">
              GitHub
            </Link>
          </Text>
        </Stack>
      </FLPaper>
    </ClientSide>
  )
}

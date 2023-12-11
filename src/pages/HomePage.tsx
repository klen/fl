import { FLPaper } from "@/components"
import { version } from "@/utils/env"
import { Anchor, List, Stack, Text, Title } from "@mantine/core"

export function HomePage() {
  return (
    <FLPaper p="md">
      <Stack gap="lg">
        <Title>Генераторы для НРИ "Запретные земли" ({version})</Title>
        <Stack gap="xs">
          <Title order={2}>Возможности</Title>
          <List>
            <List.Item>
              Генерация <Anchor href="/finds">находок</Anchor>
            </List.Item>
            <List.Item>
              Генерация <Anchor href="/place">точек интереса</Anchor>
            </List.Item>
            <List.Item>
              Генерация <Anchor href="/daemon">демонов</Anchor>
            </List.Item>
            <List.Item>
              Генерация <Anchor href="/legends">легенд</Anchor>
            </List.Item>
            <List.Item>
              Генерация <Anchor href="/characters">персонажей игроков</Anchor>
            </List.Item>
            <List.Item>
              Генерация <Anchor href="/npc">персонажей мастера</Anchor>
            </List.Item>
          </List>
        </Stack>
        <Stack gap="xs">
          <Title order={2}>Авторские права</Title>
          <Text>
            Права на НРИ "Запретные земли" принадлежат{" "}
            <Anchor target="_blank" href="https://freeleaguepublishing.com/en/">
              Free League Publishing
            </Anchor>{" "}
            (Fria Ligan AB).
          </Text>
          <Text>
            Российская локализация НРИ "Запретные земли" принадлежит{" "}
            <Anchor target="_blank" href="https://studio101.ru/categories/forbidden-lands">
              Студия 101
            </Anchor>
          </Text>
          <Text>
            Исходный код проекта доступен на{" "}
            <Anchor target="_blank" href="https://github.com/klen/fl">
              GitHub
            </Anchor>
          </Text>
          <Text>
            Для связи с автором используйте{" "}
            <Anchor target="_blank" href="https://t.me/horneds">
              Telegram (horneds)
            </Anchor>
          </Text>
        </Stack>
      </Stack>
    </FLPaper>
  )
}

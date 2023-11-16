import { Dungeon } from "@/utils"
import { Box, Group, List, Stack, Text, Title } from "@mantine/core"
import { useTranslation } from "react-i18next"

export function DungeonInfo({ dungeon }: { dungeon: Dungeon }) {
  const { t } = useTranslation()

  return (
    <Stack>
      <Title>
        <i className="ra  ra-hole-ladder" style={{ marginRight: 8 }} />
        {dungeon.goal} ({t("dungeon")})
      </Title>
      <Stack gap="xs">
        <Text>
          Построено: {dungeon.ageDesc} ({dungeon.age}г. назад)
        </Text>
        <Text>
          Размер: {dungeon.sizeDesc} ({dungeon.size} ком.)
        </Text>
        <Text>Строитель подземелья: {dungeon.creator}</Text>
        {dungeon.createReason && <Text>Причина строительства: {dungeon.createReason}</Text>}
        <Text>История подземелья: {dungeon.history}</Text>
        <Text>Вход в подземелье: {dungeon.entrance}</Text>
        <Box>
          <Group my="sm" gap={4}>
            <i className="ra ra-dead-tree ra-lg" />
            <Title order={3}>Странности</Title>
          </Group>
          <List px="sm">
            {dungeon.weirdeness.map((w: any, idx) => (
              <List.Item key={idx}>
                <Text>{w}</Text>
              </List.Item>
            ))}
          </List>
        </Box>
        <Box>
          <Group my="sm" gap={4}>
            <i className="ra ra-monster-skull ra-lg" />
            <Title order={3}>Обитатели</Title>
          </Group>
          <List px="sm">
            {dungeon.population.map((p: any, idx) => (
              <List.Item key={idx}>
                <Text>{p}</Text>
              </List.Item>
            ))}
          </List>
        </Box>
      </Stack>
    </Stack>
  )
}

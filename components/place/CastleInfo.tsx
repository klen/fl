import { Castle } from "@/generate"
import { Box, Group, List, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useTranslation } from "react-i18next"

export function CastleInfo({ castle }: { castle: Castle }) {
  const { t } = useTranslation()

  return (
    <Stack>
      <Title>
        <i className="ra ra-tower" style={{ marginRight: 8 }} />
        {capitalize(t(castle.type))} "{castle.name}"
      </Title>
      <Stack gap="xs">
        <Text span>
          {castle.goal} {castle.ageDesc} ({castle.age} лет назад).
        </Text>
        <Text>
          {castle.state} замок{castle.weirdness}. {castle.history}
        </Text>
        <Text>Вместимость: {castle.size} жит.</Text>
        <Text>
          Создатель замка: {castle.creator} ({castle.creatorFeature})
        </Text>
        <Box>
          <Group my="sm" gap="xs">
            <i className="ra ra-monster-skull ra-lg" />
            <Title order={3}>Обитатели</Title>
          </Group>
          <List px="sm">
            {castle.population.map((p, idx) => (
              <List.Item key={idx}>{p}</List.Item>
            ))}
          </List>
        </Box>
      </Stack>
    </Stack>
  )
}

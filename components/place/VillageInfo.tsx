import { Village } from "@/utils"
import { Box, Group, Stack, Text, Title } from "@mantine/core"

export function VillageInfo({ village }: { village: Village }) {
  return (
    <Stack>
      <Title>
        <i className="ra ra-beer" style={{ marginRight: 8 }} />
        {village.type} "{village.name}"
      </Title>
      <Stack gap="xs">
        <Text>
          Построено: {village.ageDesc} ({village.age} лет назад)
        </Text>
        <Text>Население: {village.size} жителей</Text>
        <Text>
          Правление: {village.gov} ({village.govFeature})
        </Text>
        {<Text>Проблема: {village.problem}</Text>}
        {<Text>Черта поселения: {village.feature}</Text>}
        {<Text>Странность поселения: {village.weird}</Text>}
      </Stack>
      {village.houses.length == 0 ? null : (
        <Box>
          <Group gap="xs">
            <i className="ra ra-capitol ra-lg" />
            <Title order={3}>Здания</Title>
          </Group>
          <ul>
            {village.houses.map((h: any, idx) => (
              <li key={idx}>
                <Text>{h}</Text>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Stack>
  )
}

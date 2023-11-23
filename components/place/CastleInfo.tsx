import { Castle } from "@/generate"
import { Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useTranslation } from "react-i18next"
import { AppList } from "../ui"

export function CastleInfo({ castle }: { castle: Castle }) {
  const { t } = useTranslation()

  return (
    <Stack>
      <Title>
        <i className="ra ra-castle-flag" style={{ marginRight: 8 }} />
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
        <AppList title="Обитатели" icon={<i className="ra ra-monster-skull ra-lg" />}>
          {castle.population}
        </AppList>
      </Stack>
    </Stack>
  )
}

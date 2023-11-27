import { Dungeon } from "@/generate"
import { Stack, Text, Title } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { AppList } from "../ui"

export function DungeonInfo({ dungeon }: { dungeon: Dungeon }) {
  const { t } = useTranslation()

  return (
    <Stack>
      <Title>
        <i className="ra  ra-hole-ladder" style={{ marginRight: 8 }} />
        {dungeon.name} ({t("dungeon")})
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
        <AppList title="Странности" icon={<i className="ra ra-dead-tree ra-lg" />}>
          {dungeon.weirdeness}
        </AppList>
        <AppList title="Обитатели" icon={<i className="ra ra-monster-skull ra-lg" />}>
          {dungeon.population}
        </AppList>
      </Stack>
    </Stack>
  )
}

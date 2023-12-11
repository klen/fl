import { Dungeon } from "@/generate"
import { Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
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
        <AppList title={t("Rooms")} icon={<i className="ra ra-lg ra-metal-gate" />} type="ordered">
          {dungeon.rooms.map((room, idx) => (
            <Stack key={idx} gap="xs" mb="xs">
              <Text fw={600}>
                {t(capitalize(room.type))}
                {", "}
                <Text span>
                  {room.doors.length > 0 ? (
                    <Text span>
                      {t("doors")} {room.doors.length}: {room.doors.map((d) => t(d)).join(", ")}
                    </Text>
                  ) : (
                    t("no doors")
                  )}
                </Text>
              </Text>
              {/*
              {room.content.length > 0 && (
                <>
                  {room.content.map((c, idx) => (
                    <Text key={idx}>{c}</Text>
                  ))}
                </>
              )}   */}
            </Stack>
          ))}
        </AppList>
      </Stack>
    </Stack>
  )
}

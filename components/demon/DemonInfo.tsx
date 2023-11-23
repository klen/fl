import { Demon } from "@/generate"
import { PaperProps, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useTranslation } from "react-i18next"
import { FLPaper } from "../layouts"
import { AppList } from "../ui"

export function DemonInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const { t } = useTranslation()
  const demon = new Demon(seed)

  return (
    <FLPaper pb="xl" {...props}>
      <Stack>
        <Title>
          {demon.name} – {demon.form.toLowerCase()}
        </Title>
        {demon.effect && <Text>{demon.effect}</Text>}
        <AppList title="Аттрибуты" icon={<i className="ra ra-muscle-fat ra-lg" />}>
          <Text>
            Телосложение: <b>{demon.strength}</b>
          </Text>
          <Text>
            Ловкость: <b>{demon.agility}</b>
          </Text>
          <Text>
            Разум: <b>{demon.wits}</b>
          </Text>
          <Text>
            Броня: <b>{demon.armor}</b>
          </Text>
        </AppList>
        <AppList title="Навыки" icon={<i className="ra ra-lg ra-campfire" />}>
          {demon.skills.map((s) =>
            s.level ? (
              <Text key={s.name}>
                {capitalize(t(s.name))}: <b>{s.level}</b>
              </Text>
            ) : null
          )}
        </AppList>
        <AppList title="Свойства" icon={<i className="ra ra-lg ra-bleeding-eye" />}>
          {demon.features.map((feature) => (
            <Text key={feature.feature}>
              {feature.feature} ({feature.desc.toLowerCase()})
            </Text>
          ))}
        </AppList>
      </Stack>
    </FLPaper>
  )
}

import { Demon } from "@/generate"
import { Group, PaperProps, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { Fragment } from "react"
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
        <Text>Слабость: {demon.weakness}</Text>
        <Group gap="sm">
          <i className="ra ra-muscle-fat ra-lg" />
          <Text>
            Телосложение: <b>{demon.strength}</b>
          </Text>
          <i className="ra ra-diamonds" />
          <Text>
            Ловкость: <b>{demon.agility}</b>
          </Text>
          <i className="ra ra-diamonds" />
          <Text>
            Разум: <b>{demon.wits}</b>
          </Text>
          <i className="ra ra-diamonds" />
          <Text>
            Эмпатия: <b>{demon.empathy}</b>
          </Text>
          <i className="ra ra-diamonds" />
          <Text>
            Броня: <b>{demon.armor}</b>
          </Text>
        </Group>
        <Group gap="sm">
          <i className="ra ra-lg ra-campfire" />
          {demon.skills.map((s, idx) =>
            s.level ? (
              <Fragment key={s.name}>
                {idx ? <i className="ra ra-diamonds" /> : null}
                <Text>
                  {capitalize(t(s.name))}: <b>{s.level}</b>
                </Text>
              </Fragment>
            ) : null
          )}
        </Group>
        <AppList title="Свойства" icon={<i className="ra ra-lg ra-bleeding-eye" />}>
          {demon.features.map((feature) => (
            <Text key={feature.feature}>
              {feature.feature} ({feature.desc.toLowerCase()})
            </Text>
          ))}
        </AppList>
        <AppList title="Атаки" icon={<i className="ra ra-lg" />}>
          {demon.attacks.map((attack) => (
            <Text key={attack.attack}>
              {attack.attack}:{" "}
              {attack.dices ? (
                <Text span>
                  ({attack.dices}
                  <i className="ra ra-perspective-dice-six" />)
                </Text>
              ) : null}
              &nbsp;{attack.damage.toLowerCase()}
            </Text>
          ))}
        </AppList>
      </Stack>
    </FLPaper>
  )
}

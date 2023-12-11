import { Demon } from "@/generate"
import { Divider, Group, PaperProps, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { FLPaper } from "../layouts"
import { AppList, Bookmark, Controls, CopyLink } from "../ui"

export function DemonInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const { t } = useTranslation()
  const demon = new Demon(seed)

  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack>
        <Title>
          {demon.name} – {demon.form.toLowerCase()}
        </Title>
        {demon.effect && <Text>{demon.effect}</Text>}
        {demon.specials.map((special) => (
          <Text key={special.name}>
            {special.name}: {special.desc}
          </Text>
        ))}
        {demon.features.map((feature) => (
          <Text key={feature.name}>
            {feature.name} ({feature.desc.toLowerCase()})
          </Text>
        ))}
        <Text>Слабость: {demon.weakness}</Text>
        <Divider />
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
        <AppList title="Атаки" icon={<i className="ra ra-lg" />}>
          {demon.attacks.map((attack) => (
            <Text key={attack.name}>
              {attack.name} ({attack.distance.toLowerCase()}):{" "}
              {attack.dices != "0" ? (
                <Text span>
                  {attack.dices}
                  <i className="ra ra-perspective-dice-six" />
                </Text>
              ) : null}
              &nbsp;{attack.damage.toLowerCase()}
            </Text>
          ))}
        </AppList>
      </Stack>
      <Controls>
        <CopyLink />
        <Bookmark prefix="demons" seed={seed} name={demon.name} />
      </Controls>
    </FLPaper>
  )
}

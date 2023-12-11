import { NPC } from "@/generate"
import { Divider, Group, PaperProps, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { FLPaper } from "../layouts"
import { Bookmark, Controls, CopyLink } from "../ui"

export function NPCInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const { t } = useTranslation()
  const npc = new NPC(seed)
  const name = `${npc.name} ${npc.type}`

  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack>
        <Title>{name}</Title>
        <Text>
          {t(capitalize(npc.race))}-{(npc.sex ? t("Man") : t("Woman")).toLowerCase()}
        </Text>
        <Text>
          {t("Feature")}: {npc.feature}
        </Text>
        <Text>
          {t("Quirk")}: {npc.weirdness}
        </Text>
        <Divider />
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-muscle-fat ra-lg" /> {t("Attributes")}
          </Title>
          <Group gap="sm">
            <Text>
              {t("Strength")}: <b>{npc.attrs.strength}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Agility")}: <b>{npc.attrs.agility}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Wits")}: <b>{npc.attrs.wits}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Empathy")}: <b>{npc.attrs.empathy}</b>
            </Text>
          </Group>
        </Stack>
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-lg ra-campfire" /> {t("Skills")}
          </Title>
          <Group gap="sm">
            {Object.entries(npc.skills).map(([skill, value], idx) => (
              <Fragment key={skill}>
                {idx ? <i className="ra ra-diamonds" /> : null}
                <Text>
                  {t(capitalize(skill))}: <b>{value}</b>
                </Text>
              </Fragment>
            ))}
          </Group>
        </Stack>
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-lg ra-potion" /> {t("Items")}
          </Title>
          <Group gap="sm">
            {npc.items.map((item, idx) => (
              <Fragment key={item}>
                {idx ? <i className="ra ra-diamonds" /> : null}
                <Text>{capitalize(item)}</Text>
              </Fragment>
            ))}
          </Group>
        </Stack>
      </Stack>
      <Controls>
        <CopyLink />
        <Bookmark prefix="npc" seed={seed} name={name} />
      </Controls>
    </FLPaper>
  )
}

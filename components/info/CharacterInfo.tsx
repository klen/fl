import { Character } from "@/generate"
import { Group, PaperProps, Stack, Text, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { FLPaper } from "../layouts"
import { Bookmark, Controls, CopyLink } from "../ui"

export function CharacterInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const { t } = useTranslation()
  const character = new Character(seed)
  const name = `${t(character.profession)}-${character.kin} (${character.childhood.toLowerCase()})`

  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack>
        <Title>{name}</Title>
        <Text>{character.childhoodDesc}</Text>
        <Text>
          <b>{t("Birthplace")}</b>: {character.birthPlace}
        </Text>
        <Text>
          <b>{character.event}</b>: {character.eventDesc}
        </Text>
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-muscle-fat ra-lg" /> {t("Attributes")}
          </Title>
          <Group gap="sm">
            <Text>
              {t("Strength")}: <b>{character.attrs.strength}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Agility")}: <b>{character.attrs.agility}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Wits")}: <b>{character.attrs.wits}</b>
            </Text>
            <i className="ra ra-diamonds" />
            <Text>
              {t("Empathy")}: <b>{character.attrs.empathy}</b>
            </Text>
          </Group>
        </Stack>
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-lg ra-campfire" /> {t("Skills")}
          </Title>
          <Group gap="sm">
            {Object.entries(character.skills).map(([skill, value], idx) => (
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
            <i className="ra ra-lg ra-feather-wing" /> {t("Talents")}
          </Title>
          <Group gap="sm">
            {character.talents.map((talent, idx) => (
              <Fragment key={talent}>
                {idx ? <i className="ra ra-diamonds" /> : null}
                <Text>{t(capitalize(talent))}</Text>
              </Fragment>
            ))}
          </Group>
        </Stack>
        <Stack gap="xs">
          <Title order={3}>
            <i className="ra ra-lg ra-potion" /> {t("Items")}
          </Title>
          <Group gap="sm">
            {character.items.map((item, idx) => (
              <Fragment key={item}>
                {idx ? <i className="ra ra-diamonds" /> : null}
                <Text>{capitalize(item)}</Text>
              </Fragment>
            ))}
          </Group>
        </Stack>
        <Text mt="xs">
          <b>{character.meet}</b>: {character.meetDesc}
        </Text>
      </Stack>
      <Controls>
        <CopyLink />
        <Bookmark prefix="characters" seed={seed} name={name} />
      </Controls>
    </FLPaper>
  )
}

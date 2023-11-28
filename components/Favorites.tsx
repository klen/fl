import { useStorage } from "@/utils"
import { Anchor, List, Stack, Title } from "@mantine/core"
import capitalize from "lodash/capitalize"
import { useTranslation } from "react-i18next"

export function Favorites() {
  const { t } = useTranslation()
  const value = useStorage()[0]

  const finds = value.finds || {}
  const demons = value.demons || {}
  const places = value.places || {}
  const legends = value.legends || {}
  const characters = value.characters || {}

  return (
    <Stack>
      {Object.keys(places).length > 0 && (
        <Stack gap="xs">
          <Title order={3}>{t("Places")}</Title>
          <List>
            {Object.keys(places).map((seed) => (
              <List.Item key={seed}>
                <Anchor href={`/place#${seed}`}>
                  {places[seed].name} ({t(places[seed].type)})
                </Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      )}
      {Object.keys(finds).length > 0 && (
        <Stack gap="xs">
          <Title order={3}>{t("Finds")}</Title>
          <List>
            {Object.keys(finds).map((seed) => (
              <List.Item key={seed}>
                <Anchor href={`/finds#${seed}`}>{finds[seed].name}</Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      )}
      {Object.keys(demons).length > 0 && (
        <Stack gap="xs">
          <Title order={3}>{t("Demons")}</Title>
          <List>
            {Object.keys(demons).map((seed) => (
              <List.Item key={seed}>
                <Anchor href={`/daemon#${seed}`}>{demons[seed].name}</Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      )}
      {Object.keys(legends).length > 0 && (
        <Stack gap="xs">
          <Title order={3}>{t("Legends")}</Title>
          <List>
            {Object.keys(legends).map((seed) => (
              <List.Item key={seed}>
                <Anchor href={`/legends#${seed}`}>{capitalize(legends[seed].name)}</Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      )}
      {Object.keys(characters).length > 0 && (
        <Stack gap="xs">
          <Title order={3}>{t("Characters")}</Title>
          <List>
            {Object.keys(characters).map((seed) => (
              <List.Item key={seed}>
                <Anchor href={`/characters#${seed}`}>{capitalize(characters[seed].name)}</Anchor>
              </List.Item>
            ))}
          </List>
        </Stack>
      )}
    </Stack>
  )
}

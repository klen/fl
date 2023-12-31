import { Find } from "@/generate"
import { PaperProps, Stack, Text, Title } from "@mantine/core"
import { capitalize } from "lodash"
import { useTranslation } from "react-i18next"
import { MoneyLine } from "../common"
import { FLPaper } from "../layouts"
import { Bookmark, Controls, CopyLink } from "../ui"

export function FindInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const { t } = useTranslation()
  const find = new Find(seed)
  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack gap="xs">
        <Title>
          <i className="ra  ra-diamond" style={{ marginRight: 8 }} />
          {find.isMoney ? t("Money") : find.desc}
        </Title>
        <Title order={3}>
          {t(capitalize(find.rarity))} ({t(capitalize(find.type)).toLowerCase()})
        </Title>
        <Text>
          Стоимость: <MoneyLine num={find.price} />
        </Text>
        {find.weird && (
          <Text>
            Странность предмета: {find.weird.desc}{" "}
            {find.weird.effect && <Text span>({find.weird.effect.toLowerCase()})</Text>}
          </Text>
        )}
        <Text>Вес: {find.weight}</Text>
      </Stack>
      <Controls>
        <CopyLink />
        <Bookmark prefix="finds" seed={seed} name={find.desc} />
      </Controls>
    </FLPaper>
  )
}

import { Find } from "@/generate"
import { PaperProps, Stack, Text, Title } from "@mantine/core"
import { MoneyLine } from "../common"
import { FLPaper } from "../layouts"
import { Bookmark } from "../ui"

export function FindInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const find = new Find(seed)
  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack gap="xs">
        <Title>
          <i className="ra  ra-diamond" style={{ marginRight: 8 }} />
          {find.desc}
        </Title>
        <Title order={3}>
          {find.rarity} ({find.type})
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
      <Bookmark prefix="finds" seed={seed} name={find.desc} />
    </FLPaper>
  )
}
import { Legend } from "@/generate/legends/legend"
import { PaperProps, Stack, Text, Title } from "@mantine/core"
import { FLPaper } from "../layouts"
import { Bookmark } from "../ui"

export function LegendInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const legend = new Legend(seed)

  return (
    <FLPaper p="md" pos="relative" {...props}>
      <Stack gap="xs">
        <Title>Давным-давно, {legend.ageDesc}...</Title>
        <Text>
          Давным-давно, {legend.ageDesc} {legend.sex == "0" ? "жил-был" : "жила-была"}{" "}
          {legend.subject} {legend.sex == "0" ? "который искал" : "которая искала"} {legend.search}{" "}
          из-за {legend.goal}.
        </Text>
        <Text>
          {legend.sex == "0" ? "Он отправился" : "Она отправилась"} {legend.place} {legend.distance}{" "}
          где-то {legend.where} {legend.direction}.
        </Text>
        <Text>
          Рассказывают, что потом {legend.final[`sex${legend.sex}`]}, а в том месте остались{" "}
          {legend.find} и {legend.enemy}.
        </Text>
      </Stack>
      <Bookmark prefix="legends" seed={seed} name={legend.subject} />
    </FLPaper>
  )
}

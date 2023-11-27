import { Legend } from "@/generate/legends/legend"
import { PaperProps, Stack, Text } from "@mantine/core"
import { FLPaper } from "../layouts"

export function LegendInfo({ seed, ...props }: { seed: number } & PaperProps) {
  const legend = new Legend(seed)
  return (
    <FLPaper pb="xl" {...props}>
      <Stack gap="xs">
        <Text>
          Давным-давно, {legend.ageDesc} {legend.sex == "0" ? "жил-был" : "жила-была"}{" "}
          {legend.subject} {legend.sex == "0" ? "который искал" : "которая искала"} {legend.search}{" "}
          из-за {legend.goal}.
        </Text>
        <Text>
          {legend.sex == "0" ? "Он отправился" : "Она отправилась"} {legend.place} {legend.distance}{" "}
          где-то {legend.where} {legend.direction}.
        </Text>
      </Stack>
    </FLPaper>
  )
}

import { Text } from "@mantine/core"
import { useTranslation } from "react-i18next"

export function MoneyLine({ num }: { num: number }) {
  const { t } = useTranslation()
  if (!num) return null

  const gold = Math.floor(num / 100)
  const silver = Math.floor((num - gold * 100) / 10)
  const copper = num % 10
  return (
    <>
      {gold ? (
        <Text span>
          {gold} {t("gold", { count: gold })}{" "}
        </Text>
      ) : null}
      {silver ? (
        <Text span>
          {silver} {t("silver", { count: silver })}{" "}
        </Text>
      ) : null}
      {copper ? (
        <Text span>
          {copper} {t("copper", { count: copper })}{" "}
        </Text>
      ) : null}
    </>
  )
}

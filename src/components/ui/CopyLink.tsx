import { ActionIcon, Tooltip } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
import { IconShare2 } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

export function CopyLink() {
  const { t } = useTranslation()
  const clipboard = useClipboard({ timeout: 100 })

  return (
    <Tooltip label={t("Copy link")} position="left" withArrow>
      <ActionIcon
        size="lg"
        variant="transparent"
        color={clipboard.copied ? "red" : "gray"}
        onClick={() => clipboard.copy(window.location.href)}
      >
        <IconShare2 size={32} />
      </ActionIcon>
    </Tooltip>
  )
}

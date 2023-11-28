import { ActionIcon, Tooltip } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
import { IconCopy } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

export function CopyLink() {
  const { t } = useTranslation()
  const clipboard = useClipboard({ timeout: 100 })

  return (
    <Tooltip label={t("Copy link")} position="left" withArrow>
      <ActionIcon
        size="lg"
        variant="transparent"
        color={clipboard.copied ? "gray" : "dark"}
        onClick={() => clipboard.copy(window.location.href)}
      >
        <IconCopy size={30} />
      </ActionIcon>
    </Tooltip>
  )
}

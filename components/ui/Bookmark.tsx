import { useStorage } from "@/utils"
import { ActionIcon, Tooltip } from "@mantine/core"
import { IconHeart, IconHeartFilled } from "@tabler/icons-react"

export function Bookmark({
  prefix,
  seed,
  ...props
}: {
  prefix: string
  seed: number
  [key: string]: any
}) {
  const [bookmark, setBookmark] = useStorage({ prefix, seed })

  return (
    <Tooltip
      label={bookmark ? "Убрать из избранного" : "Добавить в избранное"}
      position="left"
      withArrow
    >
      <ActionIcon
        size="lg"
        variant="transparent"
        onClick={() => {
          setBookmark(bookmark ? undefined : props)
        }}
      >
        {bookmark ? <IconHeartFilled size={32} /> : <IconHeart size={32} />}
      </ActionIcon>
    </Tooltip>
  )
}

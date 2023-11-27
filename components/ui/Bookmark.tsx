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
        variant="transparent"
        pos="absolute"
        top={0}
        right={0}
        onClick={() => {
          setBookmark(bookmark ? false : props)
        }}
      >
        {bookmark ? <IconHeartFilled /> : <IconHeart />}
      </ActionIcon>
    </Tooltip>
  )
}

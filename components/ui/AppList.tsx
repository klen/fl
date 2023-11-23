import { Box, Group, List, Title } from "@mantine/core"
import { PropsWithChildren, ReactNode } from "react"

export function AppList({
  title,
  icon,
  children,
}: PropsWithChildren<{ title: string; icon?: ReactNode }>) {
  return (
    <Box>
      {title && (
        <Group my="sm" gap={4}>
          {icon}
          <Title order={3}>{title}</Title>
        </Group>
      )}
      <List px="sm">
        {Array.isArray(children) ? (
          children.map((c, idx) => c && <List.Item key={idx}>{c}</List.Item>)
        ) : (
          <List.Item>{children}</List.Item>
        )}
      </List>
    </Box>
  )
}

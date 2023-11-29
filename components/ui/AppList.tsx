import { Box, Group, List, ListProps, Title } from "@mantine/core"
import { PropsWithChildren, ReactNode } from "react"

export function AppList({
  title,
  icon,
  children,
  ...props
}: PropsWithChildren<{ title: string; icon?: ReactNode } & ListProps>) {
  return (
    <Box>
      {title && (
        <Group my="sm" gap={4}>
          {icon}
          <Title order={3}>{title}</Title>
        </Group>
      )}
      <List px="sm" {...props}>
        {Array.isArray(children) ? (
          children.map((c, idx) => c && <List.Item key={idx}>{c}</List.Item>)
        ) : (
          <List.Item>{children}</List.Item>
        )}
      </List>
    </Box>
  )
}

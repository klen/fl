import { Paper, PaperProps, ScrollArea } from "@mantine/core"
import { PropsWithChildren } from "react"
import classes from "./styles.module.css"

export function FLPaper({ children, ...props }: PropsWithChildren<PaperProps>) {
  return (
    <Paper className={classes.FLPaper} {...props}>
      <ScrollArea h={500} type="hover">
        {children}
      </ScrollArea>
    </Paper>
  )
}

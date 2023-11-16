import { Paper, PaperProps } from "@mantine/core"
import { PropsWithChildren } from "react"
import classes from "./styles.module.css"

export function FLPaper({ children, ...props }: PropsWithChildren<PaperProps>) {
  return (
    <Paper className={classes.FLPaper} {...props}>
      {children}
    </Paper>
  )
}

import { Paper, PaperProps } from "@mantine/core"
import { PropsWithChildren, useEffect, useRef } from "react"
import classes from "./styles.module.css"

export function FLPaper({ children, ...props }: PropsWithChildren<PaperProps>) {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0
  }, [children])

  return (
    <Paper className={classes.FLPaper} mah={500} ref={ref} {...props}>
      {children}
    </Paper>
  )
}

"use client"

import { createTheme, rem } from "@mantine/core"
import { PaperOverride } from "./styles/components"

export const theme = createTheme({
  primaryColor: "dark",
  fontFamily: "'Bitter', serif",
  fontSizes: {
    xs: rem(12),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
  },
  components: {
    Paper: PaperOverride,
  },
})

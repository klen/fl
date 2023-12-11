import "@mantine/core/styles.css"
import "./styles/global.styles.css"
import "./styles/rpg-awesome.styles.css"

import { theme } from "./theme"

import { MantineProvider } from "@mantine/core"
import { RouterProvider } from "react-router-dom"
import { Shell } from "./components"
import { router } from "./router"

export function App() {
  return (
    <MantineProvider theme={theme}>
      <Shell>
        <RouterProvider router={router} />
      </Shell>
    </MantineProvider>
  )
}

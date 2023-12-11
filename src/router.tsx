import { createBrowserRouter } from "react-router-dom"
import {
  CharacterPage,
  DemonPage,
  FindPage,
  HomePage,
  LegendPage,
  NPCPage,
  PlacePage,
} from "./pages"

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/place", element: <PlacePage /> },
  { path: "/finds", element: <FindPage /> },
  { path: "/daemon", element: <DemonPage /> },
  { path: "/legends", element: <LegendPage /> },
  { path: "/characters", element: <CharacterPage /> },
  { path: "/npc", element: <NPCPage /> },
])

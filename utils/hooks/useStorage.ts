import { useLocalStorage } from "@mantine/hooks"

export function useStorage({ prefix, seed }: { prefix?: string; seed?: string | number } = {}) {
  const [value, setValue] = useLocalStorage({
    key: "fl-storage",
    defaultValue: {},
  })

  if (!prefix) return [value, setValue]

  return [
    (value[prefix] || {})[seed],
    (newValue: any) => {
      if (newValue) return setValue({ ...value, [prefix]: { ...value[prefix], [seed]: newValue } })
      delete value[prefix][seed]
      if (Object.keys(value[prefix]).length === 0) delete value[prefix]
      return setValue({ ...value })
    },
  ]
}

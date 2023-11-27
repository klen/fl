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
      setValue({
        ...value,
        [prefix]: {
          ...value[prefix],
          [seed]: newValue,
        },
      })
    },
  ]
}

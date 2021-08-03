import { useEffect, useState } from "react"

export default function useLocalStorage(key: string, initialVal?: string | (() => string)) {
  const prefixedKey = `shinigami-${key}`
  const [value, setValue] = useState(() => {
    const jsonVal = localStorage.getItem(prefixedKey)
    try {
      if (jsonVal) return JSON.parse(jsonVal)
      if (typeof initialVal === "function") return initialVal()
      else return initialVal
    } catch {
      return undefined
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}

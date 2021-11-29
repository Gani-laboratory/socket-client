import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, initialVal?: (string | any[]) | (() => string | any[])) {
  const prefixedKey = `shinigami-${key}`
  const [value, setValue] = useState<T | any>(() => {
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

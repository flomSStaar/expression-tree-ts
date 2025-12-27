import { type PropsWithChildren, useState } from 'react'
import { CalculatorHistoryContext } from '@/features/history/context.ts'
import type { CalculatorHistoryItem } from '@/features/history/types.ts'

export function CalculatorHistoryProvider({children}: PropsWithChildren) {
  const [history, setHistory] = useState<CalculatorHistoryItem[]>([])

  const addToHistory = (item: Omit<CalculatorHistoryItem, 'timestamp'>) => {
    setHistory((prev) => [{ ...item, timestamp: new Date() }, ...prev.slice(0, 9)])
  }

  const removeFromHistory = (index: number) => {
    setHistory((prev) => prev.filter((_, idx) => idx !== index))
  }

  const loadFromHistory = (index: number): CalculatorHistoryItem | null => {
    if (index < 0 || index >= history.length) {
      return null
    }
    return history[index]
  }

  const clearHistory = () => {
    setHistory([])
  }

  return (
    <CalculatorHistoryContext.Provider value={{
      history,
      addToHistory,
      removeFromHistory,
      loadFromHistory,
      clearHistory
    }}>
      {children}
    </CalculatorHistoryContext.Provider>
  )
}

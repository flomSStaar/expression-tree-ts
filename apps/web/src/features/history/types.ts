export interface CalculatorHistoryItem {
  expression: string
  result: number
  timestamp: Date
  time: number
}

export interface CalculatorHistoryContextValue {
  history: CalculatorHistoryItem[]
  addToHistory: (item: Omit<CalculatorHistoryItem, 'timestamp'>) => void
  removeFromHistory: (index: number) => void
  loadFromHistory: (index: number) => CalculatorHistoryItem | null
  clearHistory: () => void
}
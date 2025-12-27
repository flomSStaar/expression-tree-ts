import { useContext } from 'react'
import { CalculatorHistoryContext } from '@/features/history/context'

export function useCalculatorHistory() {
  return useContext(CalculatorHistoryContext)
}
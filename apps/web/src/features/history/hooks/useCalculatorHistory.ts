import { useContext } from 'react'
import { CalculatorHistoryContext } from '@/features/history/context.ts'

export function useCalculatorHistory() {
  return useContext(CalculatorHistoryContext)
}
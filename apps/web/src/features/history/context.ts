import { createContext } from 'react'
import type { CalculatorHistoryContextValue } from '@/features/history/types.ts'

export const CalculatorHistoryContext = createContext<CalculatorHistoryContextValue>({} as CalculatorHistoryContextValue)

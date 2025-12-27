import { createContext } from 'react'
import type { CalculatorHistoryContextValue } from '@/features/history/types'

export const CalculatorHistoryContext = createContext<CalculatorHistoryContextValue>({} as CalculatorHistoryContextValue)

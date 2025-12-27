import { ExpressionTree } from '@flomsstaar/expression-tree'
import { useCallback, useMemo } from 'react'

type ReturnType = {
  time: number
} & ({
  result: number
  error: null
} | {
  result: null
  error: Error
})

export function useCalculator() {
  const expressionTree = useMemo(() => new ExpressionTree(), [])


  return useCallback((expression: string): ReturnType => {
    const startTime = performance.now()

    try {
      const result = expressionTree.evaluate(expression)
      const endTime = performance.now()

      return {
        result,
        error: null,
        time: endTime - startTime,
      }
    } catch (e) {
      const endTime = performance.now()

      return {
        result: null,
        error: e instanceof Error ? e : new Error('Unknown error occurred during calculation'),
        time: endTime - startTime,
      }
    }
  }, [expressionTree])
}
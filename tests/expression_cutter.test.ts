import { describe, expect, test } from 'vitest'
import { splitExpressionInput } from './inputs/split_expression_input.ts'
import { ExpressionCutter } from '../src/expression_cutter.ts'

describe('expression cutter', () => {
  test.each(splitExpressionInput())('expression: %s', (input, expected) => {
    const expressionCutter = new ExpressionCutter()

    expect(expressionCutter.cut(input)).toStrictEqual(expected)
  })
})

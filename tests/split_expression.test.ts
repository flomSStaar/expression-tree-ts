import { describe, expect, test } from 'bun:test'
import { splitExpressionInput } from './inputs/split_expression_input.ts'
import { splitExpression } from '../src/split_expression.ts'

describe('split expression', () => {
  test.each(splitExpressionInput())('expression: %s', (input, expected) => {
    expect(splitExpression(input)).toStrictEqual(expected)
  })
})

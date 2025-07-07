import { describe, expect, test } from 'vitest'
import { expressionCutterInput } from './inputs/expression_cutter_input'
import { ExpressionCutter } from '../src/expression_cutter'

describe('expression cutter', () => {
  test.each(expressionCutterInput())('expression: %s', (input, expected) => {
    const expressionCutter = new ExpressionCutter()

    expect(expressionCutter.cut(input)).toStrictEqual(expected)
  })
})

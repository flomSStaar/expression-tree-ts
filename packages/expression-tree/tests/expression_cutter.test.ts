import { describe, expect, test } from 'vitest'
import { ExpressionCutter } from '../src/expression_cutter.js'
import { expressionCutterInput } from './inputs/expression_cutter_input.js'

describe('expression cutter', () => {
  test.each(expressionCutterInput())('expression: %s', (input, expected) => {
    const expressionCutter = new ExpressionCutter()

    expect(expressionCutter.cut(input)).toStrictEqual(expected)
  })
})

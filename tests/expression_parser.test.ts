import { describe, expect, test } from 'vitest'
import { expressionParserInput } from './inputs/expression_parser_input.ts'
import { ExpressionParser } from '../src/expression_parser.ts'

describe('expression parser', () => {
  test.each(expressionParserInput())('expression: %s', (input, expected) => {
    const parser = new ExpressionParser()

    expect(parser.parse(input)).toStrictEqual(expected)
  })
})

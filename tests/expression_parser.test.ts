import { describe, expect, test } from 'vitest'
import { expressionParserInput } from './inputs/expression_parser_input.ts'
import { ExpressionParser } from '../src/expression_parser.ts'
import { InvalidExpressionError } from '../src/errors/invalid_expression_error.ts'
import { InvalidNumberError } from '../src/errors/invalid_number_error.ts'
import { MissingClosingParenthesisError } from '../src/errors/missing_parenthese_error.ts'
import { UnknownBinaryOperatorError } from '../src/errors/unknown_binary_operator_error.ts'

describe('expression parser', () => {
  test.each(expressionParserInput())('expression: %o', (input, expected) => {
    const parser = new ExpressionParser()

    expect(parser.parse(input)).toStrictEqual(expected)
  })

  describe('error cases', () => {
    test('should throw an error if the expression is not complete', () => {
      const parser = new ExpressionParser()
      expect(() => parser.parse(['6', '+'])).toThrowError(InvalidExpressionError)
    })

    test('should throw an error if the expression is empty', () => {
      const parser = new ExpressionParser()
      expect(() => parser.parse([])).toThrowError(InvalidExpressionError)
    })

    test('should throw an error if the expression is invalid', () => {
      const parser = new ExpressionParser()
      expect(() => parser.parse(['6', '+', '5', 'invalid'])).toThrowError(InvalidExpressionError)
    })

    test.each([[['6', '+', '65a']], [['6', '+', 'a65']], [['6', '+', '6a5']]])(
      'should throw an error if the expression has invalid numbers',
      (input) => {
        const parser = new ExpressionParser()
        expect(() => parser.parse(input)).toThrowError(InvalidNumberError)
      }
    )

    test('should throw an error if the expression has missing parentheses', () => {
      const parser = new ExpressionParser()
      expect(() => parser.parse(['(', '6', '+', '5', '5'])).toThrowError(
        MissingClosingParenthesisError
      )
    })

    test('should throw an error if the parser can not map an operator', () => {
      class FakeExpressionParser extends ExpressionParser {
        test() {
          this.mapRowOperator('UNKNOWN_OPERATOR')
        }
      }

      const parser = new FakeExpressionParser()
      expect(() => parser.test()).toThrowError(UnknownBinaryOperatorError)
    })
  })
})

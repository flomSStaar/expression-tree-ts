import { describe, expect, test } from 'bun:test'
import { ExpressionNode } from '../src/models/expression_node.ts'
import { ExpressionOperator } from '../src/enums/expression_operator.ts'
import { NumberNode } from '../src/models/number_node.ts'
import { evaluateTree } from '../src/evaluate_tree.ts'
import { MissingLeftValueError } from '../src/errors/missing_left_value_error.ts'
import { MissingRightValueError } from '../src/errors/missing_right_value_error.ts'
import { DivisionByZeroError } from '../src/errors/division_by_zero_error.ts'
import { NegativeSquareRootError } from '../src/errors/invalid_square_root_error.ts'
import { UnknownExpressionOperatorError } from '../src/errors/unknown_expression_operator_error.ts'
import { UnknownNodeTypeError } from '../src/errors/unknown_node_type_error.ts'

describe('evaluate tree', () => {
  describe('one left and one right value', () => {
    test('sum operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.SUM,
        new NumberNode(2),
        new NumberNode(2)
      )

      const result = evaluateTree(expression)

      expect(result).toBe(4)
    })

    test('subtract operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.SUBTRACT,
        new NumberNode(5),
        new NumberNode(3)
      )

      const result = evaluateTree(expression)

      expect(result).toBe(2)
    })

    test('multiply operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.MULTIPLY,
        new NumberNode(3),
        new NumberNode(4)
      )

      const result = evaluateTree(expression)

      expect(result).toBe(12)
    })

    test('divide operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.DIVIDE,
        new NumberNode(8),
        new NumberNode(2)
      )

      const result = evaluateTree(expression)

      expect(result).toBe(4)
    })

    test('square root operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.SQUARE_ROOT, new NumberNode(16))

      const result = evaluateTree(expression)

      expect(result).toBe(4)
    })
  })

  describe('left value is not present', () => {
    test('sum operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.SUM, undefined, new NumberNode(2))

      const result = evaluateTree(expression)

      expect(result).toBe(2)
    })

    test('subtract operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.SUBTRACT,
        undefined,
        new NumberNode(3)
      )

      const result = evaluateTree(expression)

      expect(result).toBe(-3)
    })

    test('multiply operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.MULTIPLY,
        undefined,
        new NumberNode(4)
      )

      expect(() => evaluateTree(expression)).toThrowError(MissingLeftValueError)
    })

    test('divide operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.DIVIDE, undefined, new NumberNode(2))

      expect(() => evaluateTree(expression)).toThrowError(MissingLeftValueError)
    })

    test('square root operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.SQUARE_ROOT, undefined)

      expect(() => evaluateTree(expression)).toThrowError(MissingLeftValueError)
    })
  })

  describe('right value is not present', () => {
    test('sum operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.SUM, new NumberNode(2), undefined)

      expect(() => evaluateTree(expression)).toThrowError(MissingRightValueError)
    })

    test('subtract operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.SUBTRACT,
        new NumberNode(5),
        undefined
      )

      expect(() => evaluateTree(expression)).toThrowError(MissingRightValueError)
    })

    test('multiply operation', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.MULTIPLY,
        new NumberNode(3),
        undefined
      )

      expect(() => evaluateTree(expression)).toThrowError(MissingRightValueError)
    })

    test('divide operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.DIVIDE, new NumberNode(8), undefined)

      expect(() => evaluateTree(expression)).toThrowError(MissingRightValueError)
    })

    test('square root operation', () => {
      const expression = new ExpressionNode(ExpressionOperator.SQUARE_ROOT, new NumberNode(4))

      const result = evaluateTree(expression)

      expect(result).toBe(2)
    })
  })

  describe('unsupported operations', () => {
    test('unknown operator', () => {
      const expression = new ExpressionNode(
        'UNKNOWN_OPERATOR' as ExpressionOperator,
        new NumberNode(1),
        new NumberNode(2)
      )

      expect(() => evaluateTree(expression)).toThrowError(UnknownExpressionOperatorError)
    })

    test('unknown node type', () => {
      const expression = {
        type: 'UNKNOWN_NODE_TYPE',
        value: 42,
      } as unknown as ExpressionNode

      expect(() => evaluateTree(expression)).toThrowError(UnknownNodeTypeError)
    })
  })

  describe('special cases', () => {
    test('division by zero', () => {
      const expression = new ExpressionNode(
        ExpressionOperator.DIVIDE,
        new NumberNode(10),
        new NumberNode(0)
      )

      expect(() => evaluateTree(expression)).toThrowError(DivisionByZeroError)
    })

    test('negative square root', () => {
      const expression = new ExpressionNode(ExpressionOperator.SQUARE_ROOT, new NumberNode(-4))

      expect(() => evaluateTree(expression)).toThrowError(NegativeSquareRootError)
    })
  })
})

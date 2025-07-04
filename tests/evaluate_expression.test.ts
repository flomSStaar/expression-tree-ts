import { describe, expect, it, test } from 'vitest'
import { NumberNode } from '../src/models/number_node.ts'
import { evaluateExpression } from '../src/evaluate_expression.ts'
import { DivisionByZeroError } from '../src/errors/division_by_zero_error.ts'
import { NegativeSquareRootError } from '../src/errors/invalid_square_root_error.ts'
import { UnknownNodeTypeError } from '../src/errors/unknown_node_type_error.ts'
import { BinaryNode } from '../src/models/binary_node.ts'
import { BinaryNodeOperator } from '../src/enums/binary_node_operator.ts'
import { UnaryNode } from '../src/models/unary_node.ts'
import { UnaryNodeOperator } from '../src/enums/unary_node_operator.ts'
import { UnknownUnaryOperatorError } from '../src/errors/unknown_unary_operator_error.ts'
import { UnknownBinaryOperatorError } from '../src/errors/unknown_binary_operator_error.ts'

describe('evaluate expression', () => {
  describe('unary node operations', () => {
    describe('negation operation', () => {
      it('should negate a number', () => {
        const expression = new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(5))

        const result = evaluateExpression(expression)

        expect(result).toBe(-5)
      })

      it('should negate an operation', () => {
        const expression = new UnaryNode(
          UnaryNodeOperator.NEGATE,
          new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(3), new NumberNode(2))
        )

        const result = evaluateExpression(expression)

        expect(result).toBe(-5)
      })
    })

    describe('square root operation', () => {
      it('should calculate square root of a positive number', () => {
        const expression = new UnaryNode(UnaryNodeOperator.SQUARE_ROOT, new NumberNode(16))

        const result = evaluateExpression(expression)

        expect(result).toBe(4)
      })
    })

    describe('absolute value operation', () => {
      it('should return absolute value of a negative number', () => {
        const expression = new UnaryNode(UnaryNodeOperator.ABSOLUTE, new NumberNode(-10))

        const result = evaluateExpression(expression)

        expect(result).toBe(10)
      })

      it('should return absolute value of a positive number', () => {
        const expression = new UnaryNode(UnaryNodeOperator.ABSOLUTE, new NumberNode(10))

        const result = evaluateExpression(expression)

        expect(result).toBe(10)
      })

      it('should return absolute value of zero', () => {
        const expression = new UnaryNode(UnaryNodeOperator.ABSOLUTE, new NumberNode(0))

        const result = evaluateExpression(expression)

        expect(result).toBe(0)
      })
    })
  })

  describe('binary node operations', () => {
    test('sum operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.SUM,
        new NumberNode(2),
        new NumberNode(2)
      )

      const result = evaluateExpression(expression)

      expect(result).toBe(4)
    })

    test('subtract operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.SUBTRACT,
        new NumberNode(5),
        new NumberNode(3)
      )

      const result = evaluateExpression(expression)

      expect(result).toBe(2)
    })

    test('multiply operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.MULTIPLY,
        new NumberNode(3),
        new NumberNode(4)
      )

      const result = evaluateExpression(expression)

      expect(result).toBe(12)
    })

    test('divide operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.DIVIDE,
        new NumberNode(8),
        new NumberNode(2)
      )

      const result = evaluateExpression(expression)

      expect(result).toBe(4)
    })

    test('power operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.POWER,
        new NumberNode(8),
        new NumberNode(2)
      )

      const result = evaluateExpression(expression)

      expect(result).toBe(64)
    })
  })

  describe('unsupported operations', () => {
    test('unknown unary operator', () => {
      const expression = new UnaryNode(
        'UNKNOWN_UNARY_OPERATOR' as UnaryNodeOperator,
        new NumberNode(1)
      )

      expect(() => evaluateExpression(expression)).toThrowError(UnknownUnaryOperatorError)
    })

    test('unknown binary operator', () => {
      const expression = new BinaryNode(
        'UNKNOWN_OPERATOR' as BinaryNodeOperator,
        new NumberNode(1),
        new NumberNode(2)
      )

      expect(() => evaluateExpression(expression)).toThrowError(UnknownBinaryOperatorError)
    })

    test('unknown node type', () => {
      const expression = {
        type: 'UNKNOWN_NODE_TYPE',
        value: 42,
      } as unknown as BinaryNode

      expect(() => evaluateExpression(expression)).toThrowError(UnknownNodeTypeError)
    })
  })

  describe('special cases', () => {
    test('division by zero', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.DIVIDE,
        new NumberNode(10),
        new NumberNode(0)
      )

      expect(() => evaluateExpression(expression)).toThrowError(DivisionByZeroError)
    })

    test('negative square root', () => {
      const expression = new UnaryNode(UnaryNodeOperator.SQUARE_ROOT, new NumberNode(-4))

      expect(() => evaluateExpression(expression)).toThrowError(NegativeSquareRootError)
    })
  })
})

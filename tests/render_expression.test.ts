import { describe, expect, it, test } from 'vitest'
import { BinaryNode } from '../src/models/binary_node'
import { BinaryNodeOperator } from '../src/enums/binary_node_operator'
import { NumberNode } from '../src/models/number_node'
import { renderExpression } from '../src/render_expression'
import { UnaryNode } from '../src/models/unary_node'
import { UnaryNodeOperator } from '../src/enums/unary_node_operator'
import { UnknownUnaryOperatorError } from '../src/errors/unknown_unary_operator_error'
import { UnknownBinaryOperatorError } from '../src/errors/unknown_binary_operator_error'
import { UnknownNodeTypeError } from '../src/errors/unknown_node_type_error'

describe('render expression', () => {
  describe('unary node operations', () => {
    describe('negation operation', () => {
      it('should render a negation of a number', () => {
        const expression = new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(5))

        const result = renderExpression(expression)

        expect(result).toBe('-5')
      })

      it('should render a negation of zero', () => {
        const expression = new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(0))

        const result = renderExpression(expression)

        expect(result).toBe('0')
      })

      it('should render a negation of an operation', () => {
        const expression = new UnaryNode(
          UnaryNodeOperator.NEGATE,
          new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(3), new NumberNode(2))
        )

        const result = renderExpression(expression)

        expect(result).toBe('-(3 + 2)')
      })
    })

    it('should render a square root of a number', () => {
      const expression = new UnaryNode(UnaryNodeOperator.SQUARE_ROOT, new NumberNode(16))

      const result = renderExpression(expression)

      expect(result).toBe('sqrt(16)')
    })

    it('should render an absolute value of a number', () => {
      const expression = new UnaryNode(UnaryNodeOperator.ABSOLUTE, new NumberNode(-10))

      const result = renderExpression(expression)

      expect(result).toBe('abs(-10)')
    })
  })

  describe('binary node operations', () => {
    it('should render a sum of two numbers', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.SUM,
        new NumberNode(3),
        new NumberNode(2)
      )

      const result = renderExpression(expression)

      expect(result).toBe('3 + 2')
    })

    it('should render a subtraction of two numbers', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.SUBTRACT,
        new NumberNode(5),
        new NumberNode(2)
      )

      const result = renderExpression(expression)

      expect(result).toBe('5 - 2')
    })

    it('should render a multiplication of two numbers', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.MULTIPLY,
        new NumberNode(4),
        new NumberNode(3)
      )

      const result = renderExpression(expression)

      expect(result).toBe('4 * 3')
    })

    it('should render a division of two numbers', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.DIVIDE,
        new NumberNode(8),
        new NumberNode(2)
      )

      const result = renderExpression(expression)

      expect(result).toBe('8 / 2')
    })

    it('should render a power operation', () => {
      const expression = new BinaryNode(
        BinaryNodeOperator.POWER,
        new NumberNode(2),
        new NumberNode(3)
      )

      const result = renderExpression(expression)

      expect(result).toBe('2 ^ 3')
    })
  })

  describe('unsupported operations', () => {
    test('unknown unary operator', () => {
      const expression = new UnaryNode(
        'UNKNOWN_UNARY_OPERATOR' as UnaryNodeOperator,
        new NumberNode(1)
      )

      expect(() => renderExpression(expression)).toThrowError(UnknownUnaryOperatorError)
    })

    test('unknown binary operator', () => {
      const expression = new BinaryNode(
        'UNKNOWN_OPERATOR' as BinaryNodeOperator,
        new NumberNode(1),
        new NumberNode(2)
      )

      expect(() => renderExpression(expression)).toThrowError(UnknownBinaryOperatorError)
    })

    test('unknown node type', () => {
      const expression = {
        type: 'UNKNOWN_NODE_TYPE',
        value: 42,
      } as unknown as BinaryNode

      expect(() => renderExpression(expression)).toThrowError(UnknownNodeTypeError)
    })
  })
})

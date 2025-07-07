import type { BaseNode } from '../../src/models/base_node.ts'
import { BinaryNode } from '../../src/models/binary_node.ts'
import { BinaryNodeOperator } from '../../src/enums/binary_node_operator.ts'
import { NumberNode } from '../../src/models/number_node.ts'
import { UnaryNode } from '../../src/models/unary_node.ts'
import { UnaryNodeOperator } from '../../src/enums/unary_node_operator.ts'

export function expressionParserInput(): [string[], BaseNode][] {
  return [
    // Classic cases
    [['6', '+', '5'], new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(6), new NumberNode(5))],
    [
      ['6', '-', '5'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['6', '*', '5'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['6', '/', '5'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['6', '^', '5'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['64', '+', '5'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['64', '-', '5'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['64', '*', '5'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['64', '/', '5'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['64', '^', '5'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['6', '+', '25'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['6', '-', '25'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['6', '*', '25'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['6', '/', '25'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['6', '^', '25'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['12', '+', '34'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['12', '-', '34'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['12', '*', '34'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['12', '/', '34'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['12', '^', '34'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(12), new NumberNode(34)),
    ],
    // Parentheses
    [
      ['(', '6', '+', '5', ')'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['(', '6', '-', '5', ')'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['(', '6', '*', '5', ')'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['(', '6', '/', '5', ')'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['(', '6', '^', '5', ')'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(6), new NumberNode(5)),
    ],
    [
      ['(', '64', '+', '5', ')'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['(', '64', '-', '5', ')'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['(', '64', '*', '5', ')'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['(', '64', '/', '5', ')'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['(', '64', '^', '5', ')'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(64), new NumberNode(5)),
    ],
    [
      ['(', '6', '+', '25', ')'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['(', '6', '-', '25', ')'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['(', '6', '*', '25', ')'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['(', '6', '/', '25', ')'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['(', '6', '^', '25', ')'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(6), new NumberNode(25)),
    ],
    [
      ['(', '12', '+', '34', ')'],
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['(', '12', '-', '34', ')'],
      new BinaryNode(BinaryNodeOperator.SUBTRACT, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['(', '12', '*', '34', ')'],
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['(', '12', '/', '34', ')'],
      new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(12), new NumberNode(34)),
    ],
    [
      ['(', '12', '^', '34', ')'],
      new BinaryNode(BinaryNodeOperator.POWER, new NumberNode(12), new NumberNode(34)),
    ],
    // Negative numbers
    [
      ['-', '6', '+', '5'],
      new BinaryNode(
        BinaryNodeOperator.SUM,
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(6)),
        new NumberNode(5)
      ),
    ],
    [
      ['6', '+', '-', '5'],
      new BinaryNode(
        BinaryNodeOperator.SUM,
        new NumberNode(6),
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(5))
      ),
    ],
    [
      ['6', '-', '-', '5'],
      new BinaryNode(
        BinaryNodeOperator.SUBTRACT,
        new NumberNode(6),
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(5))
      ),
    ],
    [
      ['-', '6', '-', '5'],
      new BinaryNode(
        BinaryNodeOperator.SUBTRACT,
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(6)),
        new NumberNode(5)
      ),
    ],
    [
      ['-', '6', '-', '-', '5'],
      new BinaryNode(
        BinaryNodeOperator.SUBTRACT,
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(6)),
        new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(5))
      ),
    ],
    [
      ['-', '(', '5', '+', '2', ')'],
      new UnaryNode(
        UnaryNodeOperator.NEGATE,
        new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(5), new NumberNode(2))
      ),
    ],
    [
      ['-', '(', '5', '*', '2', '-', '4', ')', '/', '2'],
      new BinaryNode(
        BinaryNodeOperator.DIVIDE,
        new UnaryNode(
          UnaryNodeOperator.NEGATE,
          new BinaryNode(
            BinaryNodeOperator.SUBTRACT,
            new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(5), new NumberNode(2)),
            new NumberNode(4)
          )
        ),
        new NumberNode(2)
      ),
    ],
  ]
}

import { NumberNode } from './src/models/number_node.ts'
import { renderExpression } from './src/render_expression.ts'
import { evaluateExpression } from './src/evaluate_expression.ts'
import { BinaryNode } from './src/models/binary_node.ts'
import { UnaryNode } from './src/models/unary_node.ts'
import { UnaryNodeOperator } from './src/enums/unary_node_operator.ts'
import { BinaryNodeOperator } from './src/enums/binary_node_operator.ts'
import type { BaseNode } from './src/models/base_node.ts'

function testExpression(expression: string, expectedResult: number, expressionTree: BaseNode) {
  console.log('-------------------')
  const expected = `${expression} = ${expectedResult}`
  const actual = `${renderExpression(expressionTree)} = ${evaluateExpression(expressionTree)}`

  console.log('expected:', expected)
  console.log('actual:  ', actual)
  console.log('same ?   ', expected === actual)
}

testExpression(
  'sqrt(6 + 4 / 2 * 5)',
  4,
  new UnaryNode(
    UnaryNodeOperator.SQUARE_ROOT,
    new BinaryNode(
      BinaryNodeOperator.SUM,
      new NumberNode(6),
      new BinaryNode(
        BinaryNodeOperator.MULTIPLY,
        new BinaryNode(BinaryNodeOperator.DIVIDE, new NumberNode(4), new NumberNode(2)),
        new NumberNode(5)
      )
    )
  )
)

testExpression(
  '6 - -2 + 5',
  13,
  new BinaryNode(
    BinaryNodeOperator.SUM,
    new BinaryNode(
      BinaryNodeOperator.SUBTRACT,
      new NumberNode(6),
      new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(2))
    ),
    new NumberNode(5)
  )
)

testExpression(
  '6 + -(2 + 5)',
  -1,
  new BinaryNode(
    BinaryNodeOperator.SUM,
    new NumberNode(6),
    new UnaryNode(
      UnaryNodeOperator.NEGATE,
      new BinaryNode(BinaryNodeOperator.SUM, new NumberNode(2), new NumberNode(5))
    )
  )
)

testExpression(
  '6 + -2 * 5',
  -4,
  new BinaryNode(
    BinaryNodeOperator.SUM,
    new NumberNode(6),
    new BinaryNode(
      BinaryNodeOperator.MULTIPLY,
      new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(2)),
      new NumberNode(5)
    )
  )
)

testExpression(
  '6 + -(2 * 5)',
  -4,
  new BinaryNode(
    BinaryNodeOperator.SUM,
    new NumberNode(6),
    new UnaryNode(
      UnaryNodeOperator.NEGATE,
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(2), new NumberNode(5))
    )
  )
)

testExpression(
  '6 + 2 * 3 - 1',
  11,
  new BinaryNode(
    BinaryNodeOperator.SUBTRACT,
    new BinaryNode(
      BinaryNodeOperator.SUM,
      new NumberNode(6),
      new BinaryNode(BinaryNodeOperator.MULTIPLY, new NumberNode(2), new NumberNode(3))
    ),
    new NumberNode(1)
  )
)

import { NumberNode } from './src/models/number_node.ts'
import { renderExpression } from './src/render_expression.ts'
import { evaluateExpression } from './src/evaluate_expression.ts'
import { BinaryNode } from './src/models/binary_node.ts'
import { UnaryNode } from './src/models/unary_node.ts'
import { UnaryNodeOperator } from './src/enums/unary_node_operator.ts'
import { BinaryNodeOperator } from './src/enums/binary_node_operator.ts'

console.log('-------------------')
console.log('sqrt(6 + 4 / 2 * 5)')
console.log('expected result: 4')

const tree = new UnaryNode(
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

const value = renderExpression(tree)

console.log('renderExpression', value)

const result = evaluateExpression(tree)
console.log('actual result', result)

console.log('-------------------')
console.log('6 - -2 + 5')
console.log('expected result: 13')

const tree2 = new BinaryNode(
  BinaryNodeOperator.SUM,
  new BinaryNode(
    BinaryNodeOperator.SUBTRACT,
    new NumberNode(6),
    new UnaryNode(UnaryNodeOperator.NEGATE, new NumberNode(2))
  ),
  new NumberNode(5)
)

const value2 = renderExpression(tree2)
console.log('renderExpression', value2)

const result2 = evaluateExpression(tree2)
console.log('actual result', result2)

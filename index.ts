import { NumberNode } from './src/models/number_node.ts'
import { renderTree } from './src/render_tree.ts'
import { evaluateTree } from './src/evaluate_tree.ts'
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

const value = renderTree(tree)

console.log('renderTree', value)

const result = evaluateTree(tree)
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

const value2 = renderTree(tree2)
console.log('renderTree', value2)

const result2 = evaluateTree(tree2)
console.log('actual result', result2)

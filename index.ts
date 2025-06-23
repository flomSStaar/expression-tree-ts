// sqrt(6 + 4 / 2 * 5)
// result =

import { ExpressionOperator } from './src/enums/expression_operator.ts'
import { ExpressionNode } from './src/models/expression_node.ts'
import { NumberNode } from './src/models/number_node.ts'
import { renderTree } from './src/render_tree.ts'
import { evaluateTree } from './src/evaluate_tree.ts'

const tree = new ExpressionNode(
  ExpressionOperator.SQUARE_ROOT,
  new ExpressionNode(
    ExpressionOperator.SUM,
    new NumberNode(6),
    new ExpressionNode(
      ExpressionOperator.MULTIPLY,
      new ExpressionNode(ExpressionOperator.DIVIDE, new NumberNode(4), new NumberNode(2)),
      new NumberNode(5)
    )
  )
)

const value = renderTree(tree)

console.log('value', value)

const result = evaluateTree(tree)
console.log('result', result)

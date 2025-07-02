export function splitExpression(expression: string): string[] {
  const regex = /(\d+(?:\.\d+)?|\+|-|\*|\/|\(|\)|sqrt|abs)/g

  const cleanExpr = expression.replace(/\s+/g, '')

  return Array.from(cleanExpr.matchAll(regex)).map((m) => m[0])
}

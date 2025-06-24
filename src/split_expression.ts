export function splitExpression(expression: string): string[] {
  const tokens: string[] = []
  let currentToken = ''

  for (const char of expression) {
    if (/\s/.test(char)) {
      if (currentToken) {
        tokens.push(currentToken)
        currentToken = ''
      }
    } else if ('+-*/'.includes(char)) {
      if (currentToken) {
        tokens.push(currentToken)
      }
      tokens.push(char)
      currentToken = ''
    } else {
      currentToken += char
    }
  }

  if (currentToken) {
    tokens.push(currentToken)
  }

  return tokens
}

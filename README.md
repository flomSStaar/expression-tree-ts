# expression-tree

## Concept

This is a simple expression tree implementation in TypeScript. It allows you to parse mathematical expressions and evaluate them using a tree structure.

![expression tree](docs/tree.png)

## Example

```shell
$ bun run index.ts
```

Output:

```text
-------------------
expected: sqrt(6 + 4 / 2 * 5) = 4
actual:   sqrt(6 + 4 / 2 * 5) = 4
same ?    true
-------------------
expected: 6 - -2 + 5 = 13
actual:   6 - -2 + 5 = 13
same ?    true
-------------------
expected: 6 + -(2 + 5) = -1
actual:   6 + -(2 + 5) = -1
same ?    true
-------------------
expected: 6 + -2 * 5 = -4
actual:   6 + -2 * 5 = -4
same ?    true
-------------------
expected: 6 + -(2 * 5) = -4
actual:   6 + -(2 * 5) = -4
same ?    true
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


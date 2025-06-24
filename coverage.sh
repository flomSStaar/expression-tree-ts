bun run coverage && docker run --rm --env-file .env.local \
  -v ".:/usr/src" \
  sonarsource/sonar-scanner-cli \
  sonar-scanner \
  -Dsonar.projectKey=expression-tree \
  -Dsonar.sources=src \
  -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info \
  -Dsonar.tests=tests

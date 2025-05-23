const { execSync } = require('child_process');

console.log('Testing related files... 🧪');

try {
  // Executa apenas os testes relacionados aos arquivos alterados
  const changedFiles = execSync(
    'git diff --cached --name-only --diff-filter=ACM'
  )
    .toString()
    .split('\n')
    .filter(file => file.match(/\.(js|jsx|ts|tsx)$/));

  console.log('changedFiles:', changedFiles);

  if (changedFiles.length > 0) {
    execSync(
      `npx jest --findRelatedTests ${changedFiles.join(' ')} --passWithNoTests`,
      {
        stdio: 'inherit'
      }
    );
  } else {
    console.log('No related tests to run.');
  }
} catch (error) {
  console.error('Erro ao executar o pre-commit:', error);
  process.exit(1);
}

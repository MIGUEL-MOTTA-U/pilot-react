export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']
      ],
      'type-case': [2, 'always', 'lowerCase'],
      'type-empty': [2, 'never'],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'subject-case': [
        2,
        'always',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case', 'lower-case']
      ]
    }
  }
// eslint-disable-next-line no-undef
module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-task-id-max-length': [1, 'always', 15],
    'jira-task-id-project-key': [2, 'always', ['TC', 'HOTFIX-TC']],
  },
}

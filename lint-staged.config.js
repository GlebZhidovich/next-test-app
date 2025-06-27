const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': ['tsc --noEmit', buildEslintCommand, 'prettier --check'],
  '*.css': ['stylelint', 'prettier --check'],
};

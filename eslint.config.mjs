import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const eslintConfig = tseslint.config(
  {
    ignores: ['.next/', 'out/', '*.config.js', '*.config.mjs'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
);

export default eslintConfig;

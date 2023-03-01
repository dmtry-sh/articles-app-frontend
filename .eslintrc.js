module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'import',
        'i18next',
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'object-curly-spacing': ['error', 'always'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid']
            }
        ]
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:i18next/recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            files: ['**/src/**/*.test.{ts|tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            }
        },
    ]
}

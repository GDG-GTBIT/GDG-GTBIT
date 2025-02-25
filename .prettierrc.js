/** @type {import('prettier').Config} */
module.exports = {
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',
    plugins: ['prettier-plugin-tailwindcss'],
};

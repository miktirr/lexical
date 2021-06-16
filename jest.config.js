'use strict';

const common = {
  modulePathIgnorePatterns: ['/npm'],
};

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/outline/**/src/*.js',
    '<rootDir>/packages/outline-react/**/src/*.js',
  ],
  coverageReporters: ['json', 'text'],
  projects: [
    {
      ...common,
      displayName: 'unit',
      testMatch: ['**/__tests__/unit/**/*.test.js'],
      moduleNameMapper: {
        '^outline$': '<rootDir>/packages/outline/src/core/index.js',
        '^outline/ParagraphNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineParagraphNode.js',
        '^outline/HeadingNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineHeadingNode.js',
        '^outline/ListNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineListNode.js',
        '^outline/ListItemNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineListItemNode.js',
        '^outline/QuoteNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineQuoteNode.js',
        '^outline/CodeNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineCodeNode.js',
        '^outline/ImageNode$':
          '<rootDir>/packages/outline/src/extensions/OutlineImageNode.js',
        '^outline-react/useOutlineRichText$':
          '<rootDir>/packages/outline-react/src/useOutlineRichText.js',
        '^outline/HistoryHelpers$':
          '<rootDir>/packages/outline/src/helpers/OutlineHistoryHelpers.js',
        '^outline/SelectionHelpers$':
          '<rootDir>/packages/outline/src/helpers/OutlineSelectionHelpers.js',
        '^outline/TextHelpers$':
          '<rootDir>/packages/outline/src/helpers/OutlineTextHelpers.js',
        '^shared/getDOMTextNodeFromElement$':
          '<rootDir>/packages/shared/src/getDOMTextNodeFromElement.js',
        '^shared/isImmutableOrInertOrSegmented$':
          '<rootDir>/packages/shared/src/isImmutableOrInertOrSegmented.js',
        '^shared/invariant$': '<rootDir>/packages/shared/src/invariant.js',
        '^./dist/(.+)': './src/$1',
      },
      globals: {
        __DEV__: true,
      },
    },
    {
      ...common,
      displayName: 'e2e',
      testMatch: [
        '**/__tests__/e2e/**/*.js',
        '**/__tests__/regression/**/*.js',
      ],
    },
  ],
};

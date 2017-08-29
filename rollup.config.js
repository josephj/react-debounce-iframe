import babel from 'rollup-plugin-babel';

export default {
  input: 'src/Iframe.js',
  output: {
    name: 'ReactDebounceIframe',
    file: 'lib/index.js',
    format: 'umd'
  },
  plugins: [
    'external-helpers',
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
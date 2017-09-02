import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  external: Object.keys(pkg.dependencies),
  input: 'src/index.js',
  output: {
    name: 'ReactDebounceIframe',
    file: 'lib/index.js',
    format: 'umd'
  },
  globals: {
    'react': 'React',
    'lodash': '_',
    'prop-types': 'PropTypes'
  },
  plugins: [
    'external-helpers',
    uglify(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};

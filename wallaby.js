module.exports = function (wallaby) {
  return {
    testFramework: 'jest',
    files: [
      {pattern: 'src/index.js', load: false}
    ],
    tests: [
      {pattern: 'src/index.spec.js'}
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
      })
    },
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
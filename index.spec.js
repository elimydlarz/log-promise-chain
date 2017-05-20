const assert = require('assert');

const logPromiseChain = require('./index');

describe('log-promise-chain', () => {
  it('should not interfere', (done) => {
    const test = (result) => {
      assert.equal(3, result);
      done();
    };

    logPromiseChain(Promise.resolve(0))
      .then((x) => x + 1)
      .then((x) => x + 1)
      .then((x) => x + 1)
      .then(test);
  });
});

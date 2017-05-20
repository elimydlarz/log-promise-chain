const assert = require('assert');

const logPromiseChain = require('./index');

describe('log-promise-chain', () => {
  it('does not interfere with thenners', (done) => {
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

  it('does not interfere with catchers', (done) => {
    const test = (error) => {
      assert.equal('error', error);
      done();
    };

    logPromiseChain(Promise.resolve(0))
      .then(() => Promise.reject('error'))
      .catch(test);
  });

  context('when then receives both onFulfilled and onRejected params', () => {
    const onFulfilled = (n) => n + 1;
    const onRejected = (n) => n - 1;

    it('does not interfere with onFulfilled', (done) => {
      const testOnFulfilled = (result) => {
        assert.equal(1, result);
        done();
      };

      logPromiseChain(Promise.resolve(0))
        .then(onFulfilled, onRejected)
        .then(testOnFulfilled);
    });

    it('does not interfere with onRejected', (done) => {
      const testOnRejected = (result) => {
        assert.equal(-1, result);
        done();
      };

      logPromiseChain(Promise.reject(0))
        .then(onFulfilled, onRejected)
        .then(testOnRejected);
    });
  });
});

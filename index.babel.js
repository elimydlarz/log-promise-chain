'use strict';

var log = function log(result) {
  console.log('LOG PROMISE CHAIN: ', result);
  return result;
};

var logPromiseChain = function logPromiseChain(promise) {
  return {
    then: function then(thenner) {
      return logPromiseChain(promise.then(log).then(thenner));
    }
  };
};

module.exports = logPromiseChain;

const log = (result) => {
  console.log('LOG PROMISE CHAIN: ', result);
  return result;
};

const logPromiseChain = (promise) => ({
  then: (thenner) => logPromiseChain(promise.then(log).then(thenner)),
});

module.exports = logPromiseChain;

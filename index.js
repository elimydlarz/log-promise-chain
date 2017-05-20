const log = (result) => {
  console.log('LOG PROMISE CHAIN: ', result);
  return result;
};

const wrap = (promise) => ({
  then: (thenner, catcher) => wrap(promise.then(log).then(thenner, catcher)),
  catch: (catcher) => wrap(promise.catch(log).then(catcher)),
});

module.exports = wrap;

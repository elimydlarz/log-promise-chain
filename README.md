# Log Promise Chain

Log every step in your promise chain.

## Installation

```
npm install --save log-promise-chain
```

## Usage

### Input

```js
const logPromiseChain = require('log-promise-chain');

logPromiseChain(Promise.resolve(0))
  .then((x) => x + 1)
  .then((x) => x + 1)
  .then(() => 'Done!')
```

### Output

```shell
LOG PROMISE CHAIN:  0
LOG PROMISE CHAIN:  1
LOG PROMISE CHAIN:  2
```

This fails when using `jsdom`, but not when using the `node` env.

Using `node`:

```JS
$ npx jest --env node
 FAIL  test/index.test.js
  ● exception promise

    expect(received).toEqual(expected)
    
    Expected value to equal:
      false
    Received:
      true
      
      at Timeout.setTimeout [as _onTimeout] (test/index.test.js:3:18)
      at ontimeout (timers.js:469:11)
      at tryOnTimeout (timers.js:304:5)
      at Timer.listOnTimeout (timers.js:264:5)

  ✕ exception promise (18ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.216s, estimated 6s
Ran all test suites.
```

Using `jsdom`:

```js
$ npx jest --env jsdom
 FAIL  test/index.test.js (5.114s)
  ● exception promise

    Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
      
      at node_modules/jest-jasmine2/build/queue_runner.js:65:21
      at ontimeout (timers.js:469:11)
      at tryOnTimeout (timers.js:304:5)
      at Timer.listOnTimeout (timers.js:264:5)

  ✕ exception promise (5003ms)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        5.733s
Ran all test suites.
```

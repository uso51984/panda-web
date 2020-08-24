import TimeoutError from './TimeoutError';

const promiseTimeout =  function(promise, timeoutMillis) {
  const error = new TimeoutError();
  let timeout;

  return Promise.race([
    promise,
    new Promise(function(resolve, reject) {
      timeout = setTimeout(function() {
        reject(error);
      }, timeoutMillis);
    }),
  ]).then(function(v) {
    clearTimeout(timeout);
    return v;
  }, function(err) {
    clearTimeout(timeout);
    throw err;
  });
};

export default promiseTimeout;

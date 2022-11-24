/**
 * Function that mimics sleep behaviour, used by waiting in an async function
 * @param {Number} ms Milliseconds to sleep 
 * @returns Promise that resolve after a the sleep time
 */
function sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }
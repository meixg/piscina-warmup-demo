const count = require('./task');
const { performance } = require('perf_hooks');
const worker = require('worker_threads');

let i = 0;

async function initialize() {
    if (process.env.NODE_ENV === 'warmup') {
        count();
    }
    return ({ a, b, isWarmup }) => {
        if (isWarmup) return;

        // if (i === 0) {
        //   console.log(`${worker.threadId} start.`);
        // }
        let start = performance.now();
        count();
        if (i < 1 || i === 100) {
            console.log(`threadId: ${worker.threadId} done: ${i}th at ${performance.now() - start}`);
        }
        i++;
        return a + b;
    }
}

module.exports = initialize();
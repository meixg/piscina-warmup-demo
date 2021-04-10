const path = require('path');
const Piscina = require('piscina');
const { performance } = require('perf_hooks');

const piscina = new Piscina({
    filename: path.resolve(__dirname, 'worker.js'),
    minThreads: 10,
    maxThreads: 10
});


(async function () {
    let i = 10;
    let arr = [];

    if (process.env.NODE_ENV === 'warmup') {
        while (i--) {
            arr.push(piscina.runTask({ isWarmup: true, a: 4, b: 6 }));
        }
        await Promise.all(arr);
    }

    i = 10000;
    arr = [];
    let start = performance.now();
    while (i--) {
        arr.push(piscina.runTask({ a: 4, b: 6 }));
    }
    await Promise.all(arr);
    console.log(`total done: ${performance.now() - start}`);
})();
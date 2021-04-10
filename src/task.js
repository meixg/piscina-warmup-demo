function count() {
    let c = 100000;
    let res = '1';
    while(c--){
        res + res;
    }
}

// let i = 1000;
// while (i--) {
//     let start = performance.now();
//     count();
//     if (i > 995) {
//         console.log('done: ' + (performance.now() - start));
//     }
// }

module.exports = count;
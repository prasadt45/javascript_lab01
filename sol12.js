function findints(a, b) {
    let ints = [];
    for (let n of a) {
        if (b.includes(n)) {
            ints.push(n);
        }
    }
    return ints;
}
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6, 7];

let ans = findints(a, b);
console.log(ans);

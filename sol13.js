function getuni(a) {
    return a.reduce((ac, val) => {
        if (!ac.includes(val)) {
            ac.push(val);
        }
        return ac;
    }, []);
}

let n = [1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 1, 9, 10, 4];

let unnum = getuni(n);

console.log(unnum);

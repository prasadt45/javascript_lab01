let a = 3;
let result = 0;
let eq = '';

for (let i = 1; i <= 10; i++) {
    result = result +a ; 
    eq = eq + `${a}`;
    console.log(`${a} * ${i} = ${eq} = ${result}`);
    if (i !== 10) {
        eq  =eq + ' + ';
    }
}

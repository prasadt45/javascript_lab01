function findls(arr) {
    let lstr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lstr.length) {
            lstr = arr[i];
        }
    }
    return lstr;
}

let str = ["apple", "banana", "orange", "strawberry", "kiwi", "pineapple", "grape", "watermelon", "mango", "pomegranate"];

let lstr = findls(str);

console.log(lstr);

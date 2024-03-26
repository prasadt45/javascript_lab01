try {
    let obj = undefined;
    console.log(obj.someProperty);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught TypeError:", error.message);
    } else {
        console.log("Caught an error:", error.message);
    }
}

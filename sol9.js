let city = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
let name = prompt("Enter a city name:");
let i = city.indexOf(name);

if (i !== -1) {
    console.log(`Index is there in array `);
} else {
    console.log("Not Found");
}

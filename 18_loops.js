// for of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(element);
    }
}

arr.forEach(element => {
    console.log(element);
});
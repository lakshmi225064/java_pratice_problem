// Q2. Write a function that takes an array of numbers and returns the sum.
function sumArray(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

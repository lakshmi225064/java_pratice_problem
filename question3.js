// Q3. Write a function to find the largest number in an array.
function findLargest(numbers) {
    let largest = numbers[0];

    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest([10, 25, 7, 40, 15])); // Output: 40

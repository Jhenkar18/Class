function cumulativeEvenSum(array) {
    let result = [];
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // Check if the number is even
            sum += array[i];
        }
        result.push(sum);
    }

    return result;
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", array);
console.log("Cumulative even sum array:", cumulativeEvenSum(array));

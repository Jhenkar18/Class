//Cumulative Array
// const arr=[5,7,2,3,0,1];
// let n=arr.length;
// let cumArr=[];
// function calcCumulativeArray(arr){
    
//     cumArr.push(arr[0]);
//     for(let i=0;i<n;i++){

//         cumArr.push(cumArr[i-1]+arr[i]);

//     }

//    return cumArr;

// }

// calcCumulativeArray(arr);
// console.log(cumArr);


function cumulativeSum(array) {
    let result = [];
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        result.push(sum);
    }

    return result;
}

// Example usage
const array = [5,7,-2,3,0,1];
console.log("Original array:", array);
console.log("Cumulative sum array:", cumulativeSum(array));

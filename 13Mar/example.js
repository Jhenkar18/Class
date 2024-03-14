let arr=[5,7,-2,3,0,1];
let n=arr.length;
function calcCumulativeArr(arr){
    let cumArr=[];

    cumArr.push(arr[0]);
    for(let i=1;i<n;i++){

        cumArr.push(arr[i]+cumArr[i-1]);
    }
    console.log(cumArr);
}

console.log(calcCumulativeArr(arr));
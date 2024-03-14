let arr=[4,-1,3,-3];
let n= arr.length;
let cumArr=[];
function calcCumulativeArr(arr){

    cumArr.push(arr[0]);
    for(let i=1;i<n;i++){

        cumArr.push(arr[i]+cumArr[i-1]);
    }
}
calcCumulativeArr(arr);
let max=Number.MIN_VALUE;
for(let l=0;l<n;l++){

    for(let R=l;R<n;R++){

        let sum=0;
        if(l==0){

            sum=cumArr[0];
        }
        else{

            sum=cumArr[R]-cumArr[l-1];
        }

        if(sum>max){
            max=sum;
        }

        
    }
    
}
console.log(max);
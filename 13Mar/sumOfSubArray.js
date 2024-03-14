let sum=0;
let arr=[4,-1,1,6,5];
let n=arr.length;
let cumArr=[];
function calcCumulativeArr(arr){
    

    cumArr.push(arr[0]);
    for(let i=1;i<n;i++){

        cumArr.push(arr[i]+cumArr[i-1]);
    }
    
}

calcCumulativeArr(arr);
for(let l=0;l<n;l++){

    for(let r=l;r<n;r++){

        if(l==0){
            sum=sum+cumArr[r];
        }
        else{

            sum=sum+(cumArr[r]-cumArr[l-1]);
        }
    }
}
console.log(arr);
console.log(cumArr);
console.log(sum);
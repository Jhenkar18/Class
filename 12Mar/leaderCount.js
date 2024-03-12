// Given an array find the count of leaders 
// An Element is called Leader if that element is greater than all the elements on right Side

let arr=[5,9,8,1,-1,0,5,2]
let n=arr.length;
let count=0;
let flag=true;
for(let i=0;i<n;i++){
    flag = true;
    for(j=i+1;j<n;j++){

        if(arr[i]<arr[j]){
            flag=false;
            break;
        }

    }
    if(flag==true){
        count++;
    }
}

console.log(count);
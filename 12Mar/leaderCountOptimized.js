// Given an array find the count of leaders 
// An Element is called Leader if that element is greater than all the elements on right Side

let arr=[5,9,8,1,-1,0,5,2]
let n=arr.length;
var max=n-1;
var count=1;
for(i=n-2;i>=0;i--){
    if(arr[i]>max){
        max=arr[i];
        count++;
    }
}
console.log("Count ="+count);
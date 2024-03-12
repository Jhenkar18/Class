// Find the Sub arrays of the given array
let arr=[7,9,5,6,11];
let n=arr.length;
for(let l=0;l<n;l++){
    
    for(let r=l;r<n;r++){

        for(i=l;i<=r;i++){
            console.log(arr[i]);
           
        }
        console.log(" ");
    }
}
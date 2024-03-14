const arr=[1,2,3,1,4,6,4,6,3,3];
let n=arr.length;
let minLength=Number.MAX_VALUE;
let min=1;
let max=6;
let calcLength=0;
for(let l=0;l<n;l++){

    if(arr[l]==min){

        for(let r=l+1;r<n;r++){

            if(arr[r]==max){

                calcLength=r-l+1;
                if(minLength>calcLength){

                    minLength=calcLength;
                }

            }
        }

    }

    else if(arr[l]==max){

        for(let r=l+1;r<n;r++){

            if(arr[r]==min){

                calcLength=r-l+1;
                if(minLength>calcLength){

                    minLength=calcLength;
                }
            }
        }
    }
    
}
console.log(calcLength);
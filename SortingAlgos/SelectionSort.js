//Swap Function
function swap(arr,x, y) 
{ 
	var temp = arr[x]; 
	arr[x] = arr[y]; 
	arr[y] = temp; 
} 
//Sort Function
function selectionSort(arr, n) 
{ 
	var i, j, min_idx; 
	for (i = 0; i < n-1; i++) 
	{ 
		min_idx = i; 
		for (j = i + 1; j < n; j++) 
		if (arr[j] < arr[min_idx]) 
			min_idx = j; 
		swap(arr,min_idx, i); 
	} 
} 
//Print Function
function printArray( arr, size) 
{ 
	var i; 
	for (i = 0; i < size; i++) 
		console.log(arr[i]); 
} 

var arr = [64, 25, 12, 22, 11]; 
	var n = arr.length; 
	selectionSort(arr, n); 
	console.log("Sorted array: <br>"); 
	printArray(arr, n); 


/*Bubble Sort*/

let arr = [2,4,16,3,6,35,5,8,9];

function bubbleSort(arr){
for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length; j++){
        if (arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
  console.log(arr);
}

bubbleSort(arr);

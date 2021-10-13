/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  
places after the decimal.
*/

const a = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr){

    let countPositiveNum = 0;
    let countNegativeNum = 0;
    let countZeros = 0;
    let n = arr.length

    arr.forEach((ele) => {
       if(ele > 0){
           countPositiveNum+=1;
       } else if (ele < 0){
           countNegativeNum+=1;
       } else if(ele === 0){
           countZeros+=1;
       }

    })

    console.log(countPositiveNum/n)
    console.log(countNegativeNum/n)
    console.log(countZeros/n)

}
console.log(plusMinus(a))
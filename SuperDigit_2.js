/* FULLY FUNCTIONAL */
function superDigit(n, k) {
    let num = n;
    function sumOfDigits(num){
        const strArr = String(num).split('')
        let sum = 0;  
        strArr.forEach((ele) => sum+=Number(ele))
        //console.log('sum',sum)
        return (sum)   
    }

    let result = sumOfDigits(num)
    n = result*k

    while(n>10){
        result = sumOfDigits(n)
        n=result
    }

    return n
    
}
console.log(superDigit('9875',4))
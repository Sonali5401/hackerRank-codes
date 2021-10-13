/* DOES NOT WORK FOR ALL CASES */

function superDigit(n, k) {
    // Write your code here
    function sumOfDigits(num){
        console.log('num',num)
        if(num < 10){
             return num
        } else {
            const strArr = String(num).split('')
            let sum = 0
            
            strArr.forEach((ele) => sum+=Number(ele))
            //console.log('sum',sum)
            return sumOfDigits(sum)
             
        }
    }
    let newStr = ''
    for(let i = 0; i<k; i++){
        newStr+=n
    }
    console.log('newStr',newStr)
    
    
    let asNumber = Number(newStr)
    console.log('number before',asNumber)

    let result = sumOfDigits(asNumber)
    
    return result

}



console.log(superDigit('148',3))
console.log(superDigit('9875',4))
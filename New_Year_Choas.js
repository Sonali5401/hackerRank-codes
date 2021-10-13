function minimumBribes(q) {
    // Write your code here

    let difference = 0
    let result = ''
    q.forEach((ele,index) => {
        if(ele > (index+1)){
            let diff = ele-(index+1)
            if(diff > 2){
                result = 'Too Chaotic'
            }
            difference +=diff
        }
    })

    if(result === ''){
        return difference
    } else {
        return result
    }

}
console.log(minimumBribes([2, 1, 5, 3, 4]))
console.log(minimumBribes([2, 5, 1, 3, 4]))
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))

function minimumBribes2(q) {
    let num = 0
    let chaotic = false
    for(let i=q.length-1; i>=0; i--) {
    if(q[i]-i>3) chaotic = true
    for(let j=q[i]-2;j<i;j++){
    if(q[j]>q[i]) num++
    }
    }
    if(chaotic) console.log("Too chaotic")
    else console.log(num)
    }
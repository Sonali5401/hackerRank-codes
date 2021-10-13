function findMedian(arr) {
    // Write your code here
    const sortedArr = arr.sort(function(a,b){return (a-b)})
    const n = arr.length
    const median = Math.floor(arr.length/2)
    
    
    return sortedArr[median]
}
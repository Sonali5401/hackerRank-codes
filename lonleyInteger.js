const arr = [1,2,3,4,3,2,1]

function lonelyinteger2(a) {
    // Write your code here
    const obj = {}
    for(let i = 0; i<a.length ; i++){
        if(obj.hasOwnProperty(a[i])){
            obj[a[i]]+=1
        } else {
            obj[a[i]] =1
        }
    }

    console.log('obj',obj)
}
function lonelyInteger(a) {
    let unique = a.filter(function(value){
      return a.indexOf(value) === a.lastIndexOf(value)
    })
    
    return unique[0];
  }

console.log(lonelyInteger(arr))
function caesarCipher(s, k) {
    // Write your code here
    
    let output = ''
    for(let i=0 ; i< s.length ;i++){
        var c = s[i] //if it's a character/symbol => directly assign it to c

        /* FOR LETTERS */
        
        if(c.match(/[a-z]/i)){
            var code = s.charCodeAt(i)
            //UPPER CASE
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + k) % 26) + 65); // % 26 for rotation from z->a
            } 
            //LOWER CASE
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + k) % 26) + 97);
        }
         
        }
        output += c;
    }
    return output
}
console.log(caesarCipher('middle-Outz',2)) //okffng-Qwvb
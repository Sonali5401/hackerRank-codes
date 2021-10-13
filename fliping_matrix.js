const matrix = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]

function flipMatrix(matrix){
    const n = matrix[0].length/2
    
    let sum = 0;

    for(let i=0 ; i<n ; i++){
        for(let j= 0; j<n ; j++){

            sum = sum +  Math.max(Math.max(matrix[i][j],matrix[i][((2*n)-j)-1]),
            Math.max(matrix[((2*n)-i)-1][j],matrix[((2*n)-i)-1][((2*n)-j)-1]))

        }
    }

    return (sum)

}

console.log(flipMatrix(matrix))
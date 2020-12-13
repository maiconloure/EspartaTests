const solution = (matrix: number[]): number => {
  let check = []
    for (let index in matrix) {
        if (!matrix.includes(matrix[index], parseInt(index)+1) && !check.includes(matrix[index]) ) {
          return matrix[index]
        }
        check.push(matrix[index])
    }
} 

const result = solution([9, 3, 9, 3, 9, 7 ,9])
console.log(result)
const solution = (matrix: number[]):number =>  {
  let res = []
  for (let number of matrix) {
    if (!res.includes(number)) {
      res.push(number)
    }
  }
  return res.length
}

const result = solution([2, 1, 1, 2, 3, 1])
console.log(result)
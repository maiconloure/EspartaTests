const solution = (N: number, M: number) => {
  let eat = []
  let current = 0
  while (true) {
    if (eat.includes(current)) {
      return eat.length
    } else {
      eat.push(current)
    }

    if (current + M > N-1) {
      current = M - (N - current)
    } else {
      current += M
    }
  }
}

const result = solution(10, 4)
console.log(result)
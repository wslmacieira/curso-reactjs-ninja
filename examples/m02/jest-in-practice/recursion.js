const sum = (arr) => {
    if (arr.length === 0)
    return 0

// função recursiva com spread operator
    const [head, ...tail] = arr
    return head + sum(tail)

    //função recursiva com slice
    // return arr[0] + sum(arr.slice(1))
}

console.log(sum([1, 2, 3, 4, 5]))

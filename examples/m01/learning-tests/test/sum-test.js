const sum =  require('./sum')

console.assert(typeof sum === 'function', 'sum deve ser uma função')

console.assert(
    sum(1,2) === 3, 'a soma deve retornar 3'
)
console.assert(
    sum(3,2) === 5, 'a soma deve retornar 5'
)

console.log('All tests passed')



console.log(process.argv)
const sum = process.argv.slice(2).map(e => Number(e)).reduce((e1,e2)=>e1+e2)



console.log(sum)
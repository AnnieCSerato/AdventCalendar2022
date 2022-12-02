const fs = require("fs")
const itemCalories = fs.readFileSync("input.text", 'utf-8')

const elvesCalories = itemCalories.split('\n\n').map(line => {
    const calories = line.split('\n')
    return calories.reduce((total,curr) => total + +curr, 0)
})

elvesCalories.sort((a,b) => {
    return b-a
})

const topThree = elvesCalories.slice(0, 3)

const total = topThree.reduce((total,curr) => total + curr, 0)
console.log(total)

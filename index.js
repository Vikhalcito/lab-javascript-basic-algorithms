// Iteration 1: Names and Input
let hacker1 = "pedrot"
let hacker2 = "pedros"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

//3.1
let nameArr = hacker1.toUpperCase().split('')
let nameUpperCase = ''

for(i=0; i<nameArr.length; i++){
    nameUpperCase += ` ${nameArr[i]}`
}
console.log(nameUpperCase)

//3.2
let reverseName = ""
for(i=hacker1.length -1 ; i>=0; i--){
    reverseName += `${hacker1[i]}`
}

console.log(reverseName)

//3.3 

let arr = [hacker1, hacker2]

arr.sort(function(a,b) {
    return a.localeCompare(b)
})

console.log(arr)

if(arr[0] === hacker1 && arr[0] !== hacker2) {
    console.log("the driver's name goes first.")
} else if(arr[0] === hacker2 && arr[0] !== hacker1){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}
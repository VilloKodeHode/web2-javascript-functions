function bob() {
    return "jamaican me crazy"
}

console.log(bob())

const bob2 = "jamaican me crazy"

console.log(bob2)

const marley = () => {
    return "Jaaaa man!"
}

console.log(marley())


let num1 = 15
let num2 = 23

// enkel funksjon som plusser tall sammen
function add() {
    // dette er det som kommer tilbake når man kaller på funksjonen:
    return num1 + num2
}

// Her kaller man på (invokes/calls) funksjonen add:
add()

// for å se svaret i konsollen:
console.log(add())


function multiply() {
    return num1 * num2
}

multiply()

console.log(multiply())

const arrowMultiply = () => num1 * num2
console.log(arrowMultiply())

//! Parametere:

//! Ikke skriv console.log inne i en funksjon!
// function hils(navn) {
//     console.log("Hello" + " " + navn)
// }

// hils("alle sammen. Ja hete mister")


function hils(navn) {
    return "Hello" + " " + navn
}

console.log(hils("alle sammen. Ja hete mister Melk!"))


const arrowAdd = (num1, num2) => num1 * num2

console.log(arrowAdd(1321, 431))
console.log(arrowAdd(11, 41))

const arrowADivide = (num1, num2) => num1 / num2

const answer = arrowADivide(358, 3)

console.log(answer)
// for å ta bort desimaltall og fortsatt la det være Number datatype (float)
console.log(parseFloat(answer.toFixed(1)))


function throw1D10Dice() {
    return Math.ceil(Math.random() * 10)
}

console.log(throw1D10Dice())

function throw1D9Dice() {
    return Math.floor(Math.random() * 9) + 1
}

console.log(throw1D9Dice())



function findRandomArrayIndex() {
    return Math.round(Math.random() * 2)
}

function findRandomIndex(arr) {
    return Math.floor(Math.random() * arr)
}

console.log("result:", findRandomIndex(100))

console.log(findRandomArrayIndex())

const colors = ["red", "blue", "green"]

function findRandomColor(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

console.log(findRandomColor(colors))

function findRandomColor2(arr) {
    return arr[findRandomIndex(arr.length)]
}

console.log(findRandomColor2(colors))



function giveCompliment() {
    const compliments = [
        "Du er fantastisk!",
        "Du er en stjerne!",
        "Du gjør verden lysere!",
        "Du er en superhelt!",
        "Du er den beste!",
    ]
    const randomIndex = Math.floor(Math.random() * compliments.length)
    const kompliment = compliments[randomIndex]
    return kompliment
}

console.log(giveCompliment())

//! MODULO
console.log(10 % 3) // 1
console.log(11 % 3) // 2
console.log(12 % 3) // 0


function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Partall"
    } else {
        return "Oddetall"
    }
}

console.log(evenOrOdd(2))
console.log(evenOrOdd(2321))
console.log(evenOrOdd(75435))


function enkelLoopfunksjon(num) {
    for (let i = 0; i < num; i++) {
        console.log(i + 1)
    }
}

// enkelLoopfunksjon(50)

function loopOutArray() {
    const tallArray = ["en", "to", "tre"];
    for (let i = 0; i < tallArray.length; i++) {
        console.log(tallArray[i])
    }

}

loopOutArray()


const names = [
    "Tom",
    "Eric",
    "Jessica",
    "Scott",
    "Anna",
    "Carl",
    "Elisabeth",
    "Benny",
    "Oliver",
    "Andy",
    "Jenny",
    "Ashley",
    "Erin",
    "Patrick",
];


//! DRY - Don't Repeat Yourself:
//   console.log(`Good day ${names[0]}`)
//   console.log(`Good day ${names[1]}`)
//   console.log(`Good day ${names[2]}`)


const greeter = (name) => `Good day ${name}`

function greet(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(greeter(arr[i]))
    }
}

greet(names)


const animals = ["eLephant", "tiger", "penguiN", "kOALA", "Giraffe", "cheEtah", "crOcodIle", "panda", "zebra", "lion"]

greet(animals)


for (let animal of animals) {
    console.log("looped out with a for of loop:", animal)
}

function wordCleaner(arr) {
    let cleanedArr = []
    for (let word of arr) {
        cleanedArr.push(word.toLowerCase())
    }
    return cleanedArr
}
console.log(wordCleaner(animals))

const randomNum = Math.floor(Math.random() * 9) + 1


function findNumber() {
    let x = 0;

    while (x !== randomNum) {
        x++;
        if (x === 9)
            break;
        console.log("trying to find number...", x)
    }

}

findNumber()

const fruits = [
    "Lemon",
    "Mangos",
    "Apple",
    "Pear",
    "Grapes",
    "Kiwi",
    "Fig",
    "Peach",
    "Grapefruit",
    "Watermelon",
    "Orange",
    "Banana",
]

  // Prøv selv: fortsett på funksjonen over for å gjøre uppercase på første bokstav (eks: "Nomel")

const stringArrayReverser = (arr) => {
    if (arr.length <= 10 || arr.length >= 100) {
        return "Array is too short or too long: (10-100)"
    }
    let reverseArray = []
    for (let i = 0; i < arr.length; i++) {
        reverseArray.push(arr[i].split("").reverse().join(""))
    }
    return reverseArray
}
console.log(stringArrayReverser(fruits))


const makeNumbersArray = (size, maxNum) => {
    let numArray = [];
    for (let i = 0; i < size; i++) {
      numArray.push(Math.round(Math.random() * maxNum));
    }
    return numArray;
  };

console.log(makeNumbersArray(10, 10))

const maxFinder = (arr) => {
    let biggest = 0;
    for (let val of arr) {
        if (val > biggest) biggest = val
    }
    return `The highest value in the array is: ${biggest}`
}

const numArr = [37, 29, 57, 38, 58, 2, 26, 37]

console.log(maxFinder(makeNumbersArray(10, 10)))


function generatePassword(len) {
 let password = "";
 while (password.length < len) {
    password += String.fromCharCode(Math.floor(Math.random()*87) + 35)
 }
 return password
}

console.log(generatePassword(50))


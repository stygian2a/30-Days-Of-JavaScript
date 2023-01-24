// 1
console.log(countries)
console.log(webTechs)

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replaceAll(".", "")
text = text.replaceAll(",", "")
console.log(text)
let words = text.split(" ")
console.log(words)
console.log(words.length)

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(! shoppingCart.includes('Meat'))
    shoppingCart.unshift('Meat')
if(! shoppingCart.includes('Sugar'))
    shoppingCart.push('Sugar')
let is_allergic = true
is_allergic ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) : null

let tea_index = shoppingCart.indexOf("Tea")
shoppingCart[tea_index] = "Green Tea"

console.log(shoppingCart)

// 4
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia")

// 5
if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
} else {
    webTechs.push("Sass")
    console.log(webTechs)
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
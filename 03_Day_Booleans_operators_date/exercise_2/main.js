
// 1
let base = prompt("Base?")
let height = prompt("Height?")
console.log("The area of the triangle is", 0.5*base*height)

// 2
let a = 1.0*prompt("Enter side a:")
let b = 1.0*prompt("Enter side b:")
let c = 1.0*prompt("Enter side c:")
console.log("The perimeter of the triangle is", a+b+c)

// 3
let length = 1.0*prompt("length?")
let width = 1.0*prompt("width?")
console.log("The perimeter is", 2*(length+width))

// 4
let radius = prompt("Radius?")
console.log("The radius is", 2*Math.PI*radius)

// 5
// slope = 2, x-intercept = -2, y-intercept = 1
let slope_1 = 2

// 6
let x1 = 2, y1=2, x2=6, y2=10
let slope_2 = (y2-y1)/(x2-x1)
console.log(slope_2)

// 7
if(slope_1 > slope_2){
    console.log("Slope 1 is steeper")
} else {
    console.log("Slope 2 is steeper")
}

// 8
let x = prompt("Value of x?")
console.log(x*x+6*x+9)
console.log("Double root at x = -3")

// 9
let hours = prompt("Enter hours: ")
let rate = prompt("Enter rate per hour:" )
console.log("Your weekly rate is", hours*rate)

// 10
let firstName = "Liam", lastName = "Nivaggioli"
if(firstName.length>7){
    console.log("Your name is long")
}else{
    console.log("Your name is short")
}

// 11
if(firstName.length>lastName.length){
    console.log("Your first name,", firstName, "is longer than your family name,", lastName)
}else if(firstName.length<lastName.length){
    console.log("Your first name,", firstName, "is shorter than your family name,", lastName)
}else{
    console.log("Your first name,", firstName, "is as long as your family name,", lastName)
}

// 12
let myAge = 250
let yourAge = 25

if(myAge < yourAge){
    console.log("I am", yourAge-myAge, "younger than you.")
}else if(myAge > yourAge){
    console.log("I am", myAge-yourAge, "older than you.")
}else{
    console.log("We are the same age.")
}

// 13
let birth_year = 1.0*prompt("Enter birth year:")
let year_now = new Date().getFullYear()
let age = year_now - birth_year
if(age<18){
    console.log("You are", age,". You will be allowed to drive after",18-age,"years.")
}else{
    console.log("You are", age,". You are old enough to drive.")
}

// 14
let n_years = 1.0*prompt("Enter number of years you live:")
console.log("You lived", n_years*365.25*24*60*60, "seconds.")


// 15
let now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hour = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(year,"-",month,"-",date, " ", hour, ":", minutes)
console.log(date,"-",month,"-",year, " ", hour, ":", minutes)
console.log(date,"/",month,"/",year, " ", hour, ":", minutes)






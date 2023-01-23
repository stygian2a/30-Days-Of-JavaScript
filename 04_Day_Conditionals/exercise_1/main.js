// 1
let birth_year = 1.0*prompt("Enter birth year:")
let year_now = new Date().getFullYear()
let age = year_now - birth_year
if(age<18){
    console.log("You are", age,". You will be allowed to drive after",18-age,"years.")
}else{
    console.log("You are", age,". You are old enough to drive.")
}

// 2
let myAge = 250
let yourAge = 25

if(myAge < yourAge){
    console.log("I am", yourAge-myAge, "younger than you.")
}else if(myAge > yourAge){
    console.log("I am", myAge-yourAge, "older than you.")
}else{
    console.log("We are the same age.")
}

// 3
let a = 4
let b = 3

if(a>b){
    console.log("a is greater than b")
}else{
    console.log("a is less than b")
}

(a>b) ? console.log("a is greater than b") : console.log("a is less than b")

// 4
let number = prompt("Enter a number:")
number%2==0 ? console.log(number, "is an even number") : console.log(number, "is an odd number") 






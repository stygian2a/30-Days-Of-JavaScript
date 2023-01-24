// 1
let empty_arr = Array()

// 2
let array_2 = [1,2,3,4,5]

// 3
console.log(array_2.length)

// 4
console.log(array_2[0], array_2[Math.round(array_2.length/2)-1], array_2[array_2.length-1])

// 5
let mixedDataTypes = [1,"two", 3, true, "Five", 6]
console.log(mixedDataTypes.length)

// 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]

// 7
console.log(itCompanies)

// 8
console.log(itCompanies.length)

// 9
console.log(itCompanies[0], itCompanies[Math.round(itCompanies.length/2)-1], itCompanies[itCompanies.length-1])

// 10
itCompanies.forEach(element => {
    console.log(element)
});

// 11
itCompanies.forEach(element => {
    console.log(element.toUpperCase())
});

// 12
console.log(itCompanies[0]+", "+itCompanies[1]+", "+itCompanies[2]+", "+itCompanies[3]+", "+itCompanies[4]+", "+itCompanies[5]+" and "+itCompanies[6]+" are big IT companies.")

// 13
let company = "Facebook"
if (itCompanies.includes(company)){
    console.log(company)
} else{
    console.log(company, "is not found")
}

// 14
itCompanies.forEach(element => {
    if (element.split('o').length < 3)
        console.log(element)
});

// 15
itCompanies.sort()

// 16
itCompanies.reverse()

// 17
console.log(itCompanies)
console.log(itCompanies.slice(3))

// 18
console.log(itCompanies.slice(0,itCompanies.length-3))

// 19
if(itCompanies.length % 2 == 0){
    console.log(itCompanies.slice((itCompanies.length)/2-1, (itCompanies.length)/2+1))
}else{
    console.log(itCompanies.slice((itCompanies.length-1)/2, (itCompanies.length-1)/2+1))
}

// 20
console.log(itCompanies)

itCompanies.splice(0, 1)
console.log(itCompanies)

// 21
if(itCompanies.length % 2 == 0){
    itCompanies.splice((itCompanies.length)/2-1, 2)
}else{
    itCompanies.splice((itCompanies.length-1)/2, 1)
}
console.log(itCompanies)


// 22
itCompanies.splice(itCompanies.length-1, 1)
console.log(itCompanies)

// 23
itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)



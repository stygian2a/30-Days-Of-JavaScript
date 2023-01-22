// 1
let challenge = '30 Days Of JavaScript'

// 2
console.log(challenge)

// 3
console.log(challenge.length)

// 4
console.log(challenge.toUpperCase())

// 5
console.log(challenge.toLowerCase())

// 6 
console.log(challenge.substring(3))

// 7 
console.log(challenge.substring(0,3))

// 8
console.log(challenge.includes('Script'))

// 9
console.log(challenge.split())

// 10
console.log(challenge.split(" "))

// 11
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","))

// 12
console.log(challenge.replace("Javascript", "Python"))

// 13
console.log(challenge.charAt(15))

// 14 
console.log("J".charCodeAt(0))

// 15
console.log(challenge.indexOf("a"))

// 16
console.log(challenge.lastIndexOf("a"))

let sentence = 'You cannot end a sentence with because because because is a conjunction'

// 17
console.log(sentence.indexOf('because'))

// 18
console.log(sentence.lastIndexOf("because"))

// 19
console.log(sentence.search("because"))

// 20
console.log(' 30 Days Of JavaScript '.trim())

// 21
console.log(challenge.startsWith(challenge[0]))

// 22
console.log(challenge.endsWith(challenge[challenge.length-1]))

// 23
let pattern = /a/g
console.log(challenge.match(pattern))

// 24
console.log("30 Days Of".concat(" Javascript"))

// 25
console.log(challenge.repeat(2))



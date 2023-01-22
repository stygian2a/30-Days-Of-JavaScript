// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// 3
console.log(typeof '10')
console.log(typeof '10 string')

// 4
console.log(Math.round(parseFloat('9.8')))

// 5
console.log("python".includes("on") && "jargon".includes("on"))

// 6
console.log("I hope this course is not full of jargon.".includes("jargon"))

// 7
console.log(Math.floor(101*Math.random()))

// 8
console.log(50 + Math.floor(51*Math.random()))

// 9
console.log(Math.floor(256*Math.random()))

// 10
// I Don't understand the question

// 11
console.log("1 1 1 1 1\n\
            2 1 2 4 8\n\
            3 1 3 9 27\n\
            4 1 4 16 64\n\
            5 1 5 25 125")

// 12
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let query = "because because because"
console.log(sentence.substring(sentence.indexOf(query),sentence.indexOf(query)+query.length ))

// 1
let now = new Date()
let year = now.getFullYear() // return year
let month = now.getMonth() + 1 // return month(0 - 11)
let date = now.getDate() // return date (1 - 31)
let hour = now.getHours() // return number (0 - 23)
let minutes = now.getMinutes() // return number (0 -59)

minutes = minutes.toString().length == 1 ? "0"+minutes.toString() : minutes.toString()
hour = hour.toString().length == 1 ? "0"+hour.toString() : hour.toString()
month = month.toString().length == 1 ? "0"+month.toString() : month.toString()
date = date.toString().length == 1 ? "0"+date.toString() : date.toString()

console.log(year+"-"+month+"-"+date+" "+hour+":"+minutes)

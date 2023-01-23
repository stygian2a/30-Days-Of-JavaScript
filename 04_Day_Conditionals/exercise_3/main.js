// 1
let month = prompt("month?").toLowerCase()
switch(month){
    case 'january':
        console.log(month, "has 31 days")
        break
    case 'february':
        console.log(month, "has 28 days")
        break
    case 'march':
        console.log(month, "has 31 days")
        break
    case 'april':
        console.log(month, "has 30 days")
        break
    case 'may':
        console.log(month, "has 31 days")
        break
    case 'june':
        console.log(month, "has 30 days")
        break
    case 'july':
        console.log(month, "has 31 days")
        break
    case 'august':
        console.log(month, "has 31 days")
        break
    case 'september':
        console.log(month, "has 30 days")
        break
    case 'october':
        console.log(month, "has 31 days")
        break
    case 'november':
        console.log(month, "has 30 days")
        break
    case 'december':
        console.log(month, "has 31 days")
        break
    default:
        console.log('This is not a month.')  
}

// 2
let year = prompt("Which year?")
let is_leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)
switch(month){
    case 'january':
        console.log(month, "has 31 days")
        break
    case 'february':
        is_leap ? console.log(month, "has 29 days") : console.log(month, "has 28 days")
        break
    case 'march':
        console.log(month, "has 31 days")
        break
    case 'april':
        console.log(month, "has 30 days")
        break
    case 'may':
        console.log(month, "has 31 days")
        break
    case 'june':
        console.log(month, "has 30 days")
        break
    case 'july':
        console.log(month, "has 31 days")
        break
    case 'august':
        console.log(month, "has 31 days")
        break
    case 'september':
        console.log(month, "has 30 days")
        break
    case 'october':
        console.log(month, "has 31 days")
        break
    case 'november':
        console.log(month, "has 30 days")
        break
    case 'december':
        console.log(month, "has 31 days")
        break
    default:
        console.log('This is not a month.')  
}

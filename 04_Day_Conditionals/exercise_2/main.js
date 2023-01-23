// 1
let score = 42
if(score<50){
    console.log("F")
}else if(score<60){
    console.log("D")
}else if(score<70){
    console.log("C")
}else if(score<90){
    console.log("B")
}else{
    console.log("1")
}

// 2
let month = prompt("month?").toLowerCase()
switch(month){
    case 'january':
        console.log("Winter")
        break
    case 'february':
        console.log("Winter")
        break
    case 'march':
        console.log("Spring")
        break
    case 'april':
        console.log("Spring")
        break
    case 'may':
        console.log("Spring")
        break
    case 'june':
        console.log("Summer")
        break
    case 'july':
        console.log("Summer")
        break
    case 'august':
        console.log("Summer")
        break
    case 'september':
        console.log("Spring")
        break
    case 'october':
        console.log("Spring")
        break
    case 'november':
        console.log("Spring")
        break
    case 'december':
        console.log("Winter")
        break
    default:
        console.log('This is not a month.')
    
}

// 3
let day = prompt("What is the day today?").toLowerCase()
switch(day){
  case 'monday':
    console.log(day, "is a working day")
    break
  case 'tuesday':
    console.log(day, "is a working day")
    break
  case 'wednesday':
    console.log(day, "is a working day")
    break
  case 'thursday':
    console.log(day, "is a working day")
    break
  case 'friday':
    console.log(day, "is a working day")
    break
  case 'saturday':
    console.log(day, "is a working day")
    break
  case 'sunday':
    console.log(day, "is during weekend")
    break
  default:
    console.log(day, "is during weekend")
}

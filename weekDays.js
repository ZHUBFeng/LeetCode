function isLeapYear(year){
  if(year % 400 == 0){
    return true
  }else if(year % 100 == 0){
    return false
  }else if(year % 4 == 0){
    return true
  }
  return false
}

function monthDay(year,month){
  switch(month){
    case 2:
      if(isLeapYear(year)){
        return 29
      }else{
        return 28
      }
    case 4:
    case 6:
    case 9:
    case 11: return 30
    default: return 31
  }
}

function weekDay(year,month){
  var days = 0

  for(var i = 1; i < year; i++){
    if(isLeapYear(i)){
      days += 366
    }else{
      days += 365
    }
  }
  // y = year - 1
  // days =  y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)

  for(var j = 1; j < month; j++){
    days += monthDay(year,j)
  }

  return (days + 1) % 7
}

// 0 为星期天
console.log(weekDay(2019,6))
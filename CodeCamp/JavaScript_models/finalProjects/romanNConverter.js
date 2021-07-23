function convertToRoman(num) {
  // Number limit is 3999
  let listNum = num.toString().split('')
  while (listNum.length < 4){
    listNum.unshift('0')
  } // Equal length of the number
  console.log(listNum)

  let unitsFun = function(units){
    switch(units){
    case '1':
    return 'I'
    case '2':
    return 'II'
    case '3':
    return 'III'
    case '4':
    return 'IV'
    case '5':
    return 'V'
    case '6':
    return 'VI'
    case '7':
    return 'VII'
    case '8':
    return 'VIII'
    case '9':
    return 'IX'
    case '0':
    return ''
    }
  }
  let tensFun = function(tens){
    switch(tens){
      case '1':
      return 'X'
      case '2':
      return 'XX'
      case '3':
      return 'XXX'
      case '4':
      return 'XL'
      case '5':
      return 'L'
      case '6':
      return 'LX'
      case '7':
      return 'LXX'
      case '8':
      return 'LXXX'
      case '9':
      return 'XC'
      case '0':
      return ''
    }
  }
  let hundredsFun = function(hundreds){
    switch(hundreds){
      case'1':
      return 'C'
      case'2':
      return 'CC'
      case'3':
      return 'CCC'
      case'4':
      return 'CD'
      case'5':
      return 'D'
      case'6':
      return 'DC'
      case'7':
      return 'DCC'
      case'8':
      return 'DCCC'
      case'9':
      return 'CM'
      case'0':
      return ''
    }
  } 
  let milenniaFun= function(mile){
    switch(mile){
      case'1':
      return 'M'
      case'2':
      return 'MM'
      case'3':
      return 'MMM'
      case '0':
      return ''
    }
  }
  let units = unitsFun(listNum[3])
  let tens = tensFun(listNum[2])
  let hundreds = hundredsFun(listNum[1])
  let milennia = milenniaFun(listNum[0])
  let ans =[]
  ans.unshift(units)
  ans.unshift(tens)
  ans.unshift(hundreds)
  ans.unshift(milennia)
  ans = ans.join('')
  console.log(ans)
  return num;
}

convertToRoman(3999);

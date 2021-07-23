function checkCashRegister(price, cash, cid) {
  const roundAccurately=(number,decimalPlaces)=> Number(Math.round(number+"e"+decimalPlaces)+"e-"+decimalPlaces)
  let changeVal = cash-price
  let change = []
  let values = [
    ['ONE HUNDRED',100],
    ['TWENTY',20],
    ['TEN',10],
    ['FIVE',5],
    ['ONE',1],
    ['QUARTER',0.25],
    ['DIME',0.1],
    ['NICKEL',0.05],
    ['PENNY',0.01]
  ]
  console.log('changeVal',changeVal)
  for (let item in values){
  let multiplier = 0
  let needToGet = 0
  let available = null
  let toRest = 0
    multiplier = changeVal / values[item][1]
    needToGet = Math.floor(multiplier)
    if(multiplier > 1){
      available = cid.find(subItem => subItem.some(subSubItem => subSubItem == values[item][0]))
      if (available[1]>0){
        while((needToGet*values[item][1])>available[1] ){
          needToGet -= 1
          if(needToGet <=1){
            break
          }
        }
      toRest = values[item][1]*needToGet
      console.log('toRest',toRest)
      changeVal = roundAccurately(changeVal-toRest,2)
      console.log('changeValNew',changeVal)
      change.push([values[item][0],toRest])
      }else{
        continue
      }
    } else{
      continue
    }
    console.log(values[item][0],toRest, changeVal)
  }
  console.log(change)
  let sumCID = 0
  for (let a in cid){
    sumCID = sumCID + cid[a][1]
  }
  let sumChange=0
  for (let b in change){
    sumChange = sumChange+change[b][1]
  }
  console.log(sumChange)
  console.log(cash-price)
  if(sumChange <(cash-price)){
    return {
      'status':"INSUFFICIENT_FUNDS",
      'change':[]
    }
  }else{
    if (sumCID > sumChange){
      return{
        'status': "OPEN",
        'change': change
      }
    } else {
      return{
        'status': "CLOSED",
        'change': cid
      }
    }
  }

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

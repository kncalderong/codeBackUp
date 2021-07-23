function telephoneCheck(str) {
  let regex1 = /^[\d]{3}[\s-][\d]{3}[\s-][\d]{4}$/
  let regex2 = /^[(][\d]{3}[)][\s]?[\d]{3}[\s-][\d]{4}$/
  let regex3 = /^[\d][\d]{8}[\d]$/
  let regex4 = /^[1]\s?[(][\d]{3}[)][\s]?[\d]{3}[\s-][\d]{4}$/
  let regex5 = /^[1][\s][\d]{3}[\s-][\d]{3}[\s-][\d]{4}$/
  if (regex1.test(str) || regex2.test(str) ||regex3.test(str)||regex4.test(str) || regex5.test(str)){
    return true
  } else{
    return false
  }
}

telephoneCheck("555-555-5555");

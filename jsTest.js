export function jsTest(element) {
  let str = 'abcdefg';
  let newStr = str.match(new RegExp(".{1," + 2 + "}", "g"));

  function addUnder(arr){
    let newArr = [...arr]
    let changedArr = []

    newArr.forEach((item)=>{
      if(item.length == 1){
        item = item.concat('_')
        changedArr.push(item)
      } else{
        changedArr.push(item)
      }
    })

    console.log(changedArr)

    return changedArr
  }

  
  
  
  element.innerHTML = `${newStr}`;
  return addUnder(newStr)
}

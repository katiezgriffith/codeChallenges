// Write your solution below:

function translatePigLatin(str){
  let stringIntoList = str.split(' ')
  let consonants = 'bcdfghjklmnpqrstvwxyz'

  for(let i = 0; i < stringIntoList.length; i++){

    if(consonants.includes(stringIntoList[i])){
      stringIntoList[i] = stringIntoList[1] + stringIntoList[i][0] + 'ay'
    } else {
      stringIntoList[i] = stringIntoList[i] + 'yay'
    }
  }
let result = stringIntoList.join(' ')

return result 
}
  console.log (translatePigLatin('break into peices'))
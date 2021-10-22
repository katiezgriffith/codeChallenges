// Write your solution below:

function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&yay")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  //yay
  console.log(translatePigLatin("consonant"))
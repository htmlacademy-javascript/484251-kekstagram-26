function getRandomInt(min, max) {
  if (min >= max) {
    return 0;
  }
  return Math.round(Math.random() * (max - min)) + min;
}

getRandomInt(100, 100);

const checkLength = (checkedString, maxLength) => checkedString.length <= maxLength;

console.log(checkLength('qwerty', 5));

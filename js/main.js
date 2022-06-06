const getRandomInt = (min, max) => {
  if (min >= 0 && min <= max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  return 0;
};

getRandomInt(100, 100);

const checkStringLength = (checkedString, maxLength) => checkedString.length <= maxLength;

checkStringLength('qwerty', 5);

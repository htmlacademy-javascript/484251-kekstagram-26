const getRandomInt = (min, max) => {
  if (min < 0 || min >= max) {
    return 0;
  }
  return Math.round(Math.random() * (max - min) + min);
};

getRandomInt(1.9, 15.6);

const checkStrLength = (checkedString, maxLength) => checkedString.length <= maxLength;

checkStrLength('qwerty', 5);

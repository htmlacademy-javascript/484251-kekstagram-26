function getRandomInt(min, max) {
  if (min >= max) {
    return 0;
  }
  return Math.round(Math.random() * (max - min)) + min;
}

getRandomInt(100, 100);

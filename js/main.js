const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алексей',
  'Ольга',
  'Михаил',
  'Галина',
  'Иван',
  'Алёна',
  'Андрей',
  'Вероника',
  'Роман',
  'Анастасия',
];

const SIMILAR_PHOTO_COUNT = 25;

const commentIDs = [];
const somePhotos = [];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

//для линтера
checkStringLength ('Урюрвкос', 10);

function getCommentIDs () {
  let id;
  do {
    id = getRandomPositiveInteger(1, 999);
  } while (commentIDs.includes(id));
  commentIDs.push(id);
  return id;
}

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function createComments () {
  return {
    id: getCommentIDs(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    names: getRandomArrayElement(NAMES),
  };
}

function getComments () {
  const comments = [];
  for (let i = 0; i < 3; i++) {
    comments.push(createComments());
  }
  return comments;
}

function createPhoto (id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: 'Придумайте описание',
    likes: getRandomPositiveInteger(15, 200),
    comments: getComments(),
  };
}

function getSimilarPhotos (count) {
  for (let i = 1; i <= count; i ++) {
    somePhotos.push(createPhoto(i));
  }
}

getSimilarPhotos(SIMILAR_PHOTO_COUNT);

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

const Avatar = {
  MIN: 1,
  MAX: 6,
};

const Like = {
  MIN: 15,
  MAX: 200,
};

const CommentID = {
  MIN: 1,
  MAX: 999,
};

const Comment = {
  MIN: 1,
  MAX: 20,
};

const commentIDs = [];
const somePhotos = [];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;

//для линтера
checkStringLength ('Урюрвкос', 10);

const getCommentIDs = () => {
  let id;
  do {
    id = getRandomPositiveInteger(CommentID.MIN, CommentID.MAX);
  } while (commentIDs.includes(id));
  commentIDs.push(id);
  return id;
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getCommentIDs(),
  avatar: `img/avatar-${getRandomPositiveInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Придумайте описание',
  likes: getRandomPositiveInteger(Like.MIN, Like.MAX),
  comments: Array.from({length: getRandomPositiveInteger(Comment.MIN, Comment.MAX)}, createComment),
});

const getSimilarPhotos = (count) => {
  for (let i = 1; i <= count; i ++) {
    somePhotos.push(createPhoto(i));
  }
};

getSimilarPhotos(SIMILAR_PHOTO_COUNT);

// console.log(somePhotos);

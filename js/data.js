// import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';

// const MESSAGES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];

// const NAMES = [
//   'Алексей',
//   'Ольга',
//   'Михаил',
//   'Галина',
//   'Иван',
//   'Алёна',
//   'Андрей',
//   'Вероника',
//   'Роман',
//   'Анастасия',
// ];

// const SIMILAR_PHOTO_COUNT = 25;

// const Avatar = {
//   MIN: 1,
//   MAX: 6,
// };

// const Like = {
//   MIN: 15,
//   MAX: 200,
// };

// const CommentId = {
//   MIN: 1,
//   MAX: 999,
// };

// const Comment = {
//   MIN: 1,
//   MAX: 20,
// };

// const commentIds = [];

// const getCommentIds = () => {
//   let id;
//   do {
//     id = getRandomPositiveInteger(CommentId.MIN, CommentId.MAX);
//   } while (commentIds.includes(id));
//   commentIds.push(id);
//   return id;
// };

// const createComment = () => ({
//   id: getCommentIds(),
//   avatar: `img/avatar-${getRandomPositiveInteger(Avatar.MIN, Avatar.MAX)}.svg`,
//   message: getRandomArrayElement(MESSAGES),
//   name: getRandomArrayElement(NAMES),
// });

// const createPhoto = (id) => ({
//   id,
//   url: `photos/${id}.jpg`,
//   description: 'Придумайте описание!',
//   likes: getRandomPositiveInteger(Like.MIN, Like.MAX),
//   comments: Array.from({length: getRandomPositiveInteger(Comment.MIN, Comment.MAX)}, createComment),
// });

// const getSimilarPhotos = (count) => {
//   const somePhotos = [];
//   for (let i = 1; i <= count; i ++) {
//     somePhotos.push(createPhoto(i));
//   }
//   return somePhotos;
// };

// const createPhotos = () => getSimilarPhotos(SIMILAR_PHOTO_COUNT);

// export{ createPhotos };

import { getSimilarPhotos, SIMILAR_PHOTO_COUNT} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const miniPictures = getSimilarPhotos(SIMILAR_PHOTO_COUNT);
console.log(miniPictures);

const miniPictureListFragment = document.createDocumentFragment();

miniPictures.forEach(({url, likes, comments}) => {
  const miniPicture = pictureTemplate.cloneNode(true);

  miniPicture.querySelector('.picture__img').src = url;
  miniPicture.querySelector('.picture__likes').textContent = likes;
  miniPicture.querySelector('.picture__comments').textContent = comments.length;

  miniPictureListFragment.appendChild(miniPicture);
});

pictures.appendChild(miniPictureListFragment);

import { renderFullSize } from './full-size.js';

const renderThumbnails = (thumbnails) => {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const miniPictureListFragment = document.createDocumentFragment();

  thumbnails.forEach((photo) => {
    const {url, likes, comments} = photo;
    const miniPicture = pictureTemplate.cloneNode(true);
    miniPicture.querySelector('.picture__img').src = url;
    miniPicture.querySelector('.picture__likes').textContent = likes;
    miniPicture.querySelector('.picture__comments').textContent = comments.length;
    miniPicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderFullSize(photo);
    });
    miniPictureListFragment.appendChild(miniPicture);
  });
  pictures.appendChild(miniPictureListFragment);
};

export { renderThumbnails };

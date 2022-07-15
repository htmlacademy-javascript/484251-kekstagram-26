import { renderFullSize } from './user-modal.js';

const renderThumbnails = (thumbnails) => {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const miniPictureListFragment = document.createDocumentFragment();

  thumbnails.forEach((photo) => {
    const {url, likes, comments} = photo;
    const miniPictureNode = pictureTemplate.cloneNode(true);
    miniPictureNode.querySelector('.picture__img').src = url;
    miniPictureNode.querySelector('.picture__likes').textContent = likes;
    miniPictureNode.querySelector('.picture__comments').textContent = comments.length;
    miniPictureNode.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderFullSize(photo);
    });
    miniPictureListFragment.appendChild(miniPictureNode);
  });
  pictures.appendChild(miniPictureListFragment);
};

export { renderThumbnails };

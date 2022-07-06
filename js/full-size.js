import { isEscape } from './util.js';

const COUNT_UPLOAD_COMMENTS = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancel = bigPicture.querySelector('.big-picture__cancel');

const createSocialComments = (comments, count = COUNT_UPLOAD_COMMENTS) => {
  const counter = comments.length <= count ? comments.length : count;
  socialComments.innerHTML = null;
  for (let i = 0; i < counter; i++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');

    const commentImg = document.createElement('img');
    commentImg.classList.add('social__picture');
    commentImg.src = comments[i].avatar;
    commentImg.alt = comments[i].name;
    commentImg.width = '35';
    commentImg.height = '35';
    socialComment.appendChild(commentImg);

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comments[i].message;
    socialComment.appendChild(commentText);

    socialComments.appendChild(socialComment);
  }
  socialCommentsCount.innerHTML = `${counter} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const onModalClose = (evt) => {
  if (isEscape(evt)) {
    hideBigPicture();
  }
};

const renderFullSize = (data) => {
  const allCommentsCount = data.comments.length;
  const numberCommentsGroups = Math.ceil(allCommentsCount/COUNT_UPLOAD_COMMENTS);
  let loaderClicks = 0;
  socialCommentsCount.textContent = '';
  bigPicture.classList.remove('hidden');

  if (allCommentsCount > 5) {
    commentsLoader.classList.remove('hidden');
  }

  bigPictureImg.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = allCommentsCount;

  createSocialComments(data.comments);

  if (data.comments.length <= COUNT_UPLOAD_COMMENTS) {
    commentsLoader.classList.add('hidden');
  }

  //Использован onclick, поскольку не получается иным способом снять обработчик
  commentsLoader.onclick = () => {
    loaderClicks++;
    if (loaderClicks === numberCommentsGroups - 1) {
      commentsLoader.classList.add('hidden');
    }
    createSocialComments(data.comments, (loaderClicks + 1) * COUNT_UPLOAD_COMMENTS);
  };

  socialCaption.textContent = data.description;
  body.classList.add('modal-open');
  body.addEventListener('keydown', onModalClose);
};

cancel.addEventListener('click', () => {
  hideBigPicture();
});

//функциональное выражение используется для всплытия
//решение коллизии взаимопроникновения
function hideBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  body.removeEventListener('keydown', onModalClose);
  commentsLoader.onclick = null;
}

export{ renderFullSize, body };

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancel = bigPicture.querySelector('.big-picture__cancel');

const createSocialComments = (comment) => {
  for (let i = 0; i < comment.length; i++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');

    const commentImg = document.createElement('img');
    commentImg.classList.add('social__picture');
    commentImg.src = comment[i].avatar;
    commentImg.alt = comment[i].name;
    commentImg.width = '35';
    commentImg.height = '35';
    socialComment.appendChild(commentImg);

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment[i].message;
    socialComment.appendChild(commentText);

    socialComments.appendChild(socialComment);
  }
};

const renderFullsize = (thumb, data) => {
  thumb.addEventListener('click', (evt) => {
    evt.preventDefault();

    bigPicture.classList.remove('hidden');

    bigPictureImg.src = data.url;
    likesCount.textContent = data.likes;
    commentsCount.textContent = data.comments.length;

    createSocialComments(data.comments);

    socialCaption.textContent = data.description;

    socialCommentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    cancel.addEventListener('click', () => {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    });

    body.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  });
};

export{renderFullsize};

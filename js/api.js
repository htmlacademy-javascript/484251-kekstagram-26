const Urls = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SEND: 'https://26.javascript.pages.academy/kekstagram1',
};

const getData = (onSuccess, onFail) => {
  fetch(Urls.GET,)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => onFail('Ошибка при загрузке данных с сервера'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    Urls.SEND,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};

//шаблон
const commentTemlate = document
  .querySelector(".comments-template")
  .content.querySelector(".comments__comment");

//контейнер для вставки
const commentsConteiner = document.querySelector(".comments__list");

//форма добавления комментария
const formAddComment = document.querySelector(".form");
const nameInpute = formAddComment.querySelector(".form__name");
const textArea = formAddComment.querySelector(".form__textarea");

//добавление новой карточки

const formSubmitHandlerAdd = (evt) => {
  evt.preventDefault();
  if (nameInpute.value != "" && textArea.value != "")
    renderComment({
      name: nameInpute.value,
      text: textArea.value,
      date: new Date(),
      time: new Date(),
    });
};

//генерация комментария
const generateGalleryCard = (comment) => {
  const newComment = commentTemlate.cloneNode(true);
  const nameComment = newComment.querySelector(".comments__name");
  nameComment.textContent = comment.name;

  const textComment = newComment.querySelector(".comments__text");
  textComment.textContent = comment.text;

  const dateComment = newComment.querySelector(".comments__date");
  dateComment.textContent = comment.date;

  const timeComment = newComment.querySelector(".comments__time");
  timeComment.textContent = comment.time;

  const deleteButton = newComment.querySelector(".comments__delete");
  /* deleteButton.addEventListener("click", handlerDeleteComment); */

  const likeButton = newComment.querySelector(".comments__like");
  /* likeButton.addEventListener("click", handlerLikeComment); */

  return newComment;
};

//рендер карточки
const renderComment = (comment) => {
  commentsConteiner.prepend(generateGalleryCard(comment));
};

//обработчики событий
//обработчик отправки данных с формы добавления комментария
formAddComment.addEventListener("submit", formSubmitHandlerAdd);

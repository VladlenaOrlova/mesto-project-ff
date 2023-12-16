// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const list = document.querySelector('.places__list');

// @todo: Функция создания карточки
function creatCard(cardName, cardLink , callback) {
    const card = template.querySelector('.card').cloneNode(true);

    card.querySelector('.card__image').alt = cardName;
    card.querySelector('.card__image').src = cardLink;

const deleteButton = card.querySelector('.card__delete-button');
deleteButton.addEventListener('click', callback);

return card;
}

// @todo: Функция удаления карточки
function deleteCard(evt){
evt.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function ({name, link}) {
    const cardAdd = creatCard(name, link, deleteCard);
    list.append(cardAdd);
});

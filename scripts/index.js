// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const list = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardName, cardLink) {
    const cardElement = template.querySelector('.card').cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = cardLink;

    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.alt = cardName;
    cardTitle.textContent = cardName;

const deleteButton = cardElement.querySelector('.card__delete-button');
deleteButton.addEventListener('click', () => deleteCard(cardElement));
function deleteCard(cardElement) {  
    cardElement.remove(); 
}; 

return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt){
evt.target.closest('.card').remove();}

// @todo: Вывести карточки на страницу
initialCards.forEach(function ({name, link}) {
    const cardAdd = createCard(name, link, deleteCard);
    list.append(cardAdd); 
});
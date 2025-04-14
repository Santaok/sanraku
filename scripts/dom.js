const template = document.getElementById("cardTemplate").content
const inputTitle = document.querySelector(".card__title")
const inputLink = document.querySelector(".card__url")
const cardaddBtn = document.querySelector(".add__button")
const cardContainer = document.querySelector(".card__block")
const createCard = () => {
    const newCard = template.cloneNode(true)

    newCard.querySelector(".img__item").src = inputLink.value
    newCard.querySelector(".block__title").textContent = inputTitle.value

    const cardBlock = newCard.querySelector(".card__block__items")
    const delCardButton = newCard.querySelector(".del__card")
    const likeButton = newCard.querySelector(".like__button")
    delCardButton.textContent = "удалить карточку"

    likeButton.addEventListener("click", () => 
        toggleLikeButton(likeButton, cardBlock))
    delCardButton.addEventListener("click", () => 
        removeCard(cardBlock))

    cardContainer.appendChild(newCard)
}

cardaddBtn.addEventListener("click", createCard)
const toggleLikeButton = (likeButton, cardBlock) => {
    likeButton.classList.toggle("like__button__active")
    cardBlock.classList.toggle("block__item__active")
}
const removeCard = (cardBlock) => {
    cardBlock.remove()
}
export { cardaddBtn, createCard}
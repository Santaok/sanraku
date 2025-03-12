const template = document.getElementById("cardTemplate").content
const cardaddBtn = document.querySelector(".add__button")
const cardContainer = document.querySelector(".card__block")
const inputTitle = document.querySelector(".card__title")
const inputLink = document.querySelector(".card__url")
cardaddBtn.textContent = "Add Card"
inputLink.setAttribute("placeholder", "Enter link")
inputTitle.setAttribute("placeholder", "Enter title")

const cardData = [
    {
        link: "./assets/ddd.jpg",
        title: "card3"
    },
    {
        link: "./assets/tr.jpg",
        title: "card1"
    },
    {
        link: "./assets/ddd.jpg",
        title: "card7"
    }
]
const createCardClone = (obj) => {
    const cardClone = template.cloneNode(true)
    const imgItem = cardClone.querySelector(".img__item")
    const blockTitle = cardClone.querySelector(".block__title")
    const likeButton = cardClone.querySelector(".like__button")
    const delCardButton = cardClone.querySelector(".del__card")
    const cardBlock = cardClone.querySelector(".card__block__items")
    
    imgItem.src = obj.link
    blockTitle.textContent = obj.title
    delCardButton.textContent = "удалить карточку"
    
    likeButton.addEventListener("click", () => 
        toggleLikeButton(likeButton, cardBlock))
    delCardButton.addEventListener("click", () => 
        removeCard(cardBlock))

    cardContainer.appendChild(cardClone)
}
const toggleLikeButton = (likeButton, cardBlock) => {
    likeButton.classList.toggle("like__button__active")
    cardBlock.classList.toggle("block__item__active")
}
const removeCard = (cardBlock) => {
    cardBlock.remove()
}
cardData.forEach(createCardClone)

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

const getbtn = document.querySelector(".links")
const blockUrl = document.querySelector(".block__url")
const toggleBlockUrl = () => {
    blockUrl.classList.toggle("block__url__active")
}
getbtn.addEventListener("click", toggleBlockUrl)

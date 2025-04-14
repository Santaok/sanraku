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
        link: "..//dist/images/video5433608403714859497.gif", // сработало только с такими путями 
        title: "card3"
    },
    {
        link: "..//dist/images/gifd.gif",
        title: "card1"
    },
  
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


export { cardData, createCardClone, }

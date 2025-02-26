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
];

const funk = cardData.forEach(obj => {
    const cardClone = template.cloneNode(true)
    const imgItem = cardClone.querySelector(".img__item")
    const blockTitle = cardClone.querySelector(".block__title")
    const likeButton = cardClone.querySelector(".like__button")
    const delCardButton = cardClone.querySelector(".del__card")
    const cardBlock = cardClone.querySelector(".card__block__items")
    imgItem.src = obj.link
    blockTitle.textContent = obj.title

    delCardButton.textContent = "удалить карточку"
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("like__button__active")
        cardBlock.classList.toggle("block__item__active")
    })

    delCardButton.addEventListener("click", () => {
        cardBlock.remove()
    })

    cardContainer.appendChild(cardClone)


})
function buttons (cardClone) {
    const likeButton = cardClone.querySelector(".like__button")
    const delCardButton = cardClone.querySelector(".del__card")
    const cardBlock = cardClone.querySelector(".card__block__items")
    
    delCardButton.textContent = "удалить карточку"
    
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("like__button__active")
        cardBlock.classList.toggle("block__item__active")
    })

    delCardButton.addEventListener("click", () => {
        cardBlock.remove()
    })
}

function createCard() {
    const newcard = template.cloneNode(true)


    newcard.querySelector(".img__item").src = inputLink.value
    newcard.querySelector(".block__title").textContent = inputTitle.value

    const cardBlock = newcard.querySelector(".card__block__items")
    const delCardButton = newcard.querySelector(".del__card")
    const likeButton = newcard.querySelector(".like__button")

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("like__button__active")
        cardBlock.classList.toggle("block__item__active")
    })
    delCardButton.textContent = "удалить карточку"
    delCardButton.addEventListener("click", () => {
        cardBlock.remove();
    })

    cardContainer.appendChild(newcard)
}
cardaddBtn.addEventListener("click", createCard)


const getbtn = document.querySelector(".links")

const blockUrl = document.querySelector(".block__url")
getbtn.addEventListener("click", () => {
    blockUrl.classList.toggle("block__url__active")
})

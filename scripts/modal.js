
const inputLinkRedact = document.getElementById("titleInput")
const descriptionInputRedact = document.getElementById("descriptionInput")
const modal = document.querySelector(".modal")
const cardContainer = document.querySelector(".card__block")
const closeModal = document.querySelector(".close")


let currentCard;
cardContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('redact')) {
        const card = event.target.closest('.card__block__items')
        event.preventDefault()
        currentCard = card

        descriptionInputRedact.value = card.querySelector('.block__title').textContent
        inputLinkRedact.value = card.querySelector('.img__item').src
        

        modal.classList.add('modal_show')
    }
})

const form = document.querySelector('.form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (currentCard) {
        currentCard.querySelector('.img__item').src = inputLinkRedact.value
        currentCard.querySelector('.block__title').textContent = descriptionInputRedact.value
        modal.classList.remove('modal_show')
        currentCard = null
    }
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_show')
})

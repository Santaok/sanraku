import "../styles/app.css"
import { cardData, createCardClone } from "../scripts/data.js";
import  {cardaddBtn, createCard, } from "../scripts/dom.js"
import {} from '../scripts/modal.js'; // я написал только это и модалка начала сразу работать, причину не знаю.  возможно так и должно быть




cardData.forEach(createCardClone)
cardaddBtn.addEventListener('click', createCard);


const getbtn = document.querySelector(".links")
const blockUrl = document.querySelector(".block__url")
const toggleBlockUrl = () => {
    blockUrl.classList.toggle("block__url__active")}
getbtn.addEventListener("click", toggleBlockUrl)
 



const copy = document.querySelector('.copy');
blockUrl.addEventListener('click', function(event) {
    if (!event.target.classList.contains('block__href')) return;

    navigator.clipboard.writeText(event.target.textContent.trim());
    showCopyMessage();
});
function showCopyMessage() {
    copy.classList.add("copy__active")
    setTimeout(() => {
     copy.classList.remove("copy__active")
    }, 1500)}


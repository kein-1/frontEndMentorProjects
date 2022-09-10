const burgerBtn = document.getElementById("burger-btn")
const links = document.getElementById("links-cont")
burgerBtn.onclick = () => {

    links.classList.toggle("active")
    links.classList.toggle("links-cont")
}
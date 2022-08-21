const toggleBtn = document.getElementById("toggle-btn")
const options = document.getElementById("options-cont")
const dropDown1 = document.getElementById("features")
const dropDown2 = document.getElementById("company")
const menu1 = document.getElementById("menu-1")
const menu2 = document.getElementById("menu-2")



toggleBtn.onclick = () => {

    console.log(options.classList)
    options.classList.add("toggled-cont")
    options.classList.remove("options-cont")
}


dropDown1.onclick = () => {
    menu1.classList.toggle("drop-down-menu-show")
}

dropDown2.onclick = () => {
    menu2.classList.toggle("drop-down-menu-show")
}

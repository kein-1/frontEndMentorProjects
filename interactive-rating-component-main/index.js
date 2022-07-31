
const ratingBox = document.getElementById("ratings-container")

for (let i = 0; i < 5; i++){
    let newRating = document.createElement("button")
    newRating.setAttribute("class", "ratingButton")
    newRating.setAttribute("id", "ratingButton")
    // newRating.addEventListener("click",())
    newRating.innerText = i
    ratingBox.appendChild(newRating)
}

const ratingBox = document.getElementsByClassName("ratings-container")
const message = document.getElementById("message")
const submitBtn = document.getElementById("submit-btn")
const starIcon = document.getElementById("star-icon")

let statusBar = false
let empty =""
submitBtn.onclick = () => {

    starIcon.remove()
    statusBar = true
    if (statusBar == true && empty.length > 0){
        // console.log(`You selected ${empty} out of 5`)
        let newPic = document.createElement("img")
        let congratsText = document.createElement("p")


        newPic.setAttribute("class", "newPic")
        newPic.src = "./images/illustration-thank-you.svg"
        
        congratsText.innerText = `You selected ${empty} out of 5`

        while (message.firstChild){
            message.removeChild(message.lastChild)
        }
        
        message.appendChild(newPic)
        message.append(congratsText)
    }

}



for (let i = 1; i <= 5; i++){
    let newRating = document.createElement("button")
    newRating.setAttribute("class", "ratingButton")
    newRating.setAttribute("id", "ratingButton")
    newRating.addEventListener("click",() => {
    empty+=i.toString()
    console.log(empty)
    }
    )

    newRating.innerText = i
    ratingBox[0].appendChild(newRating)
}


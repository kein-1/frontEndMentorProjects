
let days = Array.from(document.getElementsByClassName("data"))

console.log(days)

window.onload = () => {
    fetch('./data.json')
    .then(jsonData => jsonData.json())
    .then(data => printIt(data))
}

let printIt = (data) => {
    console.log("thisran")
    for (let i = 0; i < data.length; i++){
        days[i].style.height = (data[i].amount*5).toString() + "px"
        console.log(typeof(data[i].amount))
    }
}


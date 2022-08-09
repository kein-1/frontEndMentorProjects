
const days = Array.from(document.getElementsByClassName("data"))
const values = Array.from(document.getElementsByClassName("value"))
const spent = document.getElementById("spent")
console.log(days)

window.onload = () => {
    fetch('./data.json')
    .then(jsonData => jsonData.json())
    .then(data => printIt(data))
}

let printIt = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++){
        days[i].style.height = (data[i].amount*5).toString() + "px"
        console.log(typeof(data[i].amount))
        sum+=data[i].amount
        values[i].innerText = "$" + data[i].amount
        values[i].style.visibility = "hidden"
    }
    spent.innerText=sum*4
}


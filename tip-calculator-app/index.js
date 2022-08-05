
const billTotal = document.getElementById("bill-amt")
const totalVal = document.getElementById("total-val")
const tipVal = document.getElementById("tip-total-val")
const tipBtns = Array.from(document.getElementsByClassName("btn-tip"))
const people = document.getElementById("people-count")
const reset = document.getElementById("reset")
const custom = document.getElementById("custom")

let total = 0
let population = 0
let totalPP = 0
let tipPP = 0
let tipTotal = 0
billTotal.addEventListener("input", (e) => {

    // console.log(e.target.value)
    
    // e.target.value is used to target the value we input in our <input> element
    // which we grabbed
    total = Number(e.target.value)
    // totalVal.innerText = total

    // console.log(document.querySelector(':focus'))
    console.log(total)
})

people.addEventListener("input", (e) => {
    population = e.target.value
})

tipBtns.forEach(element => element.addEventListener("click", (e) => {
    
    if (population != 0 && total !=0){
        tipTotal = e.target.value * total
        tipPP = Number(((tipTotal)/population).toFixed(2))
        totalPP = Number(((total+tipTotal)/population).toFixed(2))
        console.log(typeof(tipTotal))
        console.log(typeof(tipPP))
        console.log(typeof(totalPP))
        tipVal.innerText = tipPP
        totalVal.innerText = totalPP
    }
}))

custom.addEventListener("input", (e) => {
    if (population != 0 && total !=0){
        tipTotal = e.target.value * total
        tipPP = Number(((tipTotal)/population).toFixed(2))
        totalPP = Number(((total+tipTotal)/population).toFixed(2))
        console.log(typeof(tipTotal))
        console.log(typeof(tipPP))
        console.log(typeof(totalPP))
        tipVal.innerText = tipPP
        totalVal.innerText = totalPP
    }
})



reset.onclick = () => {
    total = 0
    population = 0
    billTotal.value =""
    people.value=""
    tipVal.innerText="$0.00"

    totalVal.innerText="$0.00"
}
const name_ = document.getElementById("name")
const cardNumb = document.getElementById("card-numb")
const month = document.getElementById("month")
const year = document.getElementById("year")
const cvc = document.getElementById("cvc")
const submitBtn = document.getElementById("submit-btn")


// Function using Regular Expressions to test if there is a letter 
// I added the '!' symbol so that means if there IS a letter, then this 
// function will instead return false. Normally the method is used to check if 
// everything is a string

let testName = (personName) => (/^[a-zA-Z]+$/.test(personName))
let testNumbs = (cardNumb) => (/^[0-9 ]+$/.test(cardNumb))

cardNumb.addEventListener("input", (e) => document.getElementById("card-number").innerText = e.target.value)
name_.addEventListener("input", (e) => document.getElementById("card-name").innerText = e.target.value)
month.addEventListener("input", (e) => document.getElementById("card-month").innerText = `${e.target.value}/`)
year.addEventListener("input", (e) => document.getElementById("card-year").innerText = e.target.value)
cvc.addEventListener("input", (e) => document.getElementById("security-code").innerText = e.target.value)

submitBtn.onclick = (element) => {
    console.log("Clicked");

    if (!testName(name_.value)){
        document.getElementById("error-msg-name").innerText = "Invalid name"
        name_.style.borderColor = "red"
        element.preventDefault()
    }
   

    if (!testNumbs(cardNumb.value)){
        document.getElementById("error-msg-card").innerText = "Wrong format, numbers only"
        cardNumb.style.borderColor = "red"
        
        element.preventDefault()
    }


    if (cardNumb.value.replace(/ /g,"").length < 0 || cardNumb.value.replace(/ /g,"").length != 16){
        document.getElementById("error-msg-card").innerText = "Please enter a 16 digit number"
        cardNumb.style.borderColor = "red"
    }

    if (month.value.length < 1 || year.value.length < 1){
        document.getElementById("error-msg-dates").innerText = "Cannot be blank"
        month.style.borderColor = "red"
        
        element.preventDefault()
    }


    else if (month.value.length != 2 || year.value.length != 2){
        document.getElementById("error-msg-dates").innerText = "Please enter in the format (MM/YY)"
        month.style.borderColor = "red"
        element.preventDefault()
    }


    if (cvc.value.length < 1){
        document.getElementById("error-msg-cvc").innerText = "Cannot be blank"
        
        cvc.style.borderColor = "red"
        element.preventDefault()
    }


    
}


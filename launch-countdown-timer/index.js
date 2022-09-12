const timerS = document.getElementById("timer")

const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

//[year, month, day, hour, minute, second, millisecond]
const future = [2022,8,20,22,55,41]

let counter;
let intervalID;
let futureDays;
let futureHours;
let futureMinutes;
let futureSeconds;
const timer = () => {
    // console.log(typeof(moment().format(" DDDD, h:mm:ss")))

    // let f = moment(future).format("dddd, MMMM Do YYYY, h:mm:ss a")
    // let futureDate = moment(future).format("dddd, MMMM Do YYYY, h:mm:ss a")
    futureDays = moment(future).diff(moment(), "days")
    futureHours = moment(future).diff(moment(), "hours")
    futureMinutes = moment(future).diff(moment(), "minutes")
    futureSeconds = moment(future).diff(moment(), "seconds")
    counter = futureDays % 60

    futureDays < 10 ? days.innerText = "0" + futureDays % 30 : days.innerText = futureDays % 30
    futureHours < 10 ? hours.innerText = "0" + futureHours % 24 : hours.innerText = futureHours % 24
    futureMinutes < 10 ? minutes.innerText = "0" + futureMinutes % 60 : minutes.innerText = futureMinutes % 60
    futureSeconds < 10 ? seconds.innerText = "0" + futureSeconds % 60 : seconds.innerText = futureSeconds % 60
    
    console.log(`Future Days: ${futureDays}`)
    console.log(`Future Hours: ${futureHours}`)
    console.log(`Future Minutes: ${futureMinutes}`)
    console.log(`Future Seconds: ${futureSeconds}`)
    
    // if (counter <35) clearInterval(intervalID)
}


function runTimer(){

    intervalID = setInterval(timer,1000)
}

window.onload = () => runTimer()
const timerS = document.getElementById("timer")

const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

//[year, month, day, hour, minute, second, millisecond]
// const future = [2022,8,20,22,55,41]

const futureDate = moment().add(8,"days").add(23,"hours").add(55,"minutes").add(41,"seconds")

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
    futureDays = futureDate.diff(moment(), "days") % 30
    futureHours = futureDate.diff(moment(), "hours") % 24
    futureMinutes = futureDate.diff(moment(), "minutes") % 60
    futureSeconds = futureDate.diff(moment(), "seconds") % 60
    counter = futureDays % 60

    futureDays < 10 ? days.innerText = "0" + futureDays : days.innerText = futureDays 
    futureHours < 10 ? hours.innerText = "0" + futureHours : hours.innerText = futureHours 
    futureMinutes < 10 ? minutes.innerText = "0" + futureMinutes: minutes.innerText = futureMinutes 
    futureSeconds < 10 ? seconds.innerText = "0" + futureSeconds : seconds.innerText = futureSeconds 
    
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
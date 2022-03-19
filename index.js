const workBtn = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")
const timeDisplay = document.getElementById("time-display")
const resetBtn = document.getElementById("reset-btn")
const pauseBtn = document.getElementById("pause-btn")
let timeout;


workBtn.addEventListener("click", function() { startTimer(25*60) })
shortBreakBtn.addEventListener("click", function() { startTimer(15*60) })
longBreakBtn.addEventListener("click", function() { startTimer(5*60) })


// this fucntion to reset the clock clearInterval will pause the clock showtime will reset it to 0
resetBtn.addEventListener("click", function(){
    clearInterval(timeout)
    showTime(0)
})

pauseBtn.addEventListener("click", function(){
    clearInterval(timeout)
})



function startTimer(time) {

// we use this line of code to clear the timer incase of another button was clicked
    if (typeof timeout !== undefined) {
        clearInterval(timeout)
    }
// the rendar fucntion 
    let allowedTime = time
    showTime(time)
    timeout = setInterval(function(){
// if the time reaches 0 display 0 
        if (allowedTime == 0){
            clearInterval(timeout)
            showTime(0)
// else keep decreasing the time by -1
        } else {
            allowedTime--
            showTime(allowedTime)
        }
    }, 1000);
}


// the way we display the time 
function showTime(allowedTime) {
    let minutes = pad(Math.floor(allowedTime / 60))
    let seconds = pad(allowedTime%60)
    let time = `${minutes}:${seconds}`
// document.title used to display the time on the taskbar 
    document.title = time 
    timeDisplay.innerHTML = time
}

function pad(number) {
    return number < 10 ? `0${number.toString()}` : number
}







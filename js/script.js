const startStopButton = document.getElementById('startStop')
const numbers = document.getElementById('numbers')
const arrow = document.getElementById('arrow')
let timeInter = null
let time = 0

function start(){
    startStopButton.innerHTML = 
    `
        <button onclick="stop()">Stop</button>
        <button onclick="reset()">Reset</button>
    `

    timeInter = setInterval(() => {
        time++

        numbers.innerHTML = 
        `
        ${(Math.floor(time/6000)).toString().padStart(2,0)}:${(Math.floor(time/100)%60).toString().padStart(2,0)},${(time%100).toString().padStart(2,0)}
        `

        arrow.style.transform = `rotate(${Math.floor(time/100)*6}deg)`
    }, 10)
}

function stop(){
    startStopButton.innerHTML = 
    `
        <button onclick="start()">Start</button>
        <button onclick="reset()">Reset</button>
    `

    setTimeout(() => {
        clearInterval(timeInter)
    }, 1)
    
}

function reset(){
    time = 0
    stop()
    numbers.innerHTML = 
    `
    ${(Math.floor(time/6000)).toString().padStart(2,0)}:${(Math.floor(time/100)%60).toString().padStart(2,0)},${(time%100).toString().padStart(2,0)}
    `
    arrow.style.transform = `rotate(${Math.floor(time/100)*6}deg)`
}
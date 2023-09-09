const body = document.querySelector("body")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const changeColor = () => {
    const colorHexVal = `#${((Math.random()*1000000).toFixed(0))}`
    body.style.backgroundColor = colorHexVal
    console.log("color changed")
}

let startChangeColor
const handleStart = () => {
    startChangeColor = setInterval(changeColor, 1000);
}

const stopColor = () => {
    const stopChangeColor = clearInterval(startChangeColor);
    console.log("color change stopped")
}

const handleStop = () => {
    stopColor()
}


start.addEventListener("click", handleStart)
stop.addEventListener("click", handleStop)
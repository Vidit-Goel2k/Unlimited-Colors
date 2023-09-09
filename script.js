const body = document.querySelector("body")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const randomColor = () => {
    const hex = "0123456789ABCDEF"

    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];   
    }
    return color
}

const changeColor = () => {
    const colorHexVal = randomColor()
    body.style.backgroundColor = colorHexVal
    console.log(colorHexVal)
}

let startChangeColor
const handleStart = () => {
    if(!startChangeColor){
        startChangeColor = setInterval(changeColor, 1000);
    }
}

const stopColor = () => {
    const stopChangeColor = clearInterval(startChangeColor);
    console.log("color change stopped")
    startChangeColor = null
}

const handleStop = () => {
    stopColor()
}


start.addEventListener("click", handleStart)
stop.addEventListener("click", handleStop)
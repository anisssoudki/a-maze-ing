const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")

let pauseBtn = document.createElement("button")
pauseBtn.innerText="pause music"


pauseBtn.addEventListener("click", event => {
    event.preventDefault()
 audio1.pause() || audio2.pause() || audio3.pause()
})
var audio = document.getElementById("mc_hammer")
let mcHammer = audio.childNodes[1].src

let playbtn = document.createElement("button")
playbtn.innerText="I cant touch this but i can pause it"


playbtn.addEventListener("click", event => {

 audio.pause()
})
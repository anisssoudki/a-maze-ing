
// destructuring variables from the library/ see notes line 34
// im just litteraly using an example giving by the library
// https://github.com/liabru/matter-js/blob/master/examples/mixed.js



 
document.addEventListener("DOMContentLoaded", event => {

  
background()
renderForm()
listeners()
// Player.fetchPlayer()
});

function background() {
  let backImg = document.body.style.backgroundImage = "url(images/aurora-borealis-wallpaper-high-resolution-For-Background-HD-Wallpaper.jpg)";
  
}
function wipeDom() {

  document.body.innerHTML=` <svg id="svg" height="100" width="200">
    </svg>`
    renderForm()
    listeners()
}

    
function mcHammerSuperLevel() 
{
  
  audio6.pause()
  audio20.currentTime = 1
  audio20.play()
  document.body.style.backgroundImage = "url(images/mc-giphy.gif)"
  
}
function pauseGame() {
let pauseGame = document.createElement("button")
document.body.appendChild(pauseGame)

pauseGame.innerText="pause game"
pauseGame.setAttribute("id","pausegame")
pauseGame.addEventListener("click", event => {
event.preventDefault()
canvas = document.getElementsByTagName("canvas")[0]
canvas.style.display="none";
pauseGame.remove()
unpauseGame()
 })
}

function unpauseGame() {
let unpause = document.createElement("button") 
unpause.setAttribute("id","unpauseGameBtn")
unpause.innerText="unpause"

document.body.appendChild(unpause)

 
  unpause.addEventListener("click", event => {
    event.preventDefault()
    canvas.style.display="block";
    unpause.remove()
    pauseGame()
   
   }) 
   
}


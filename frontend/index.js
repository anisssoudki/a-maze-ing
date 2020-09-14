
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
}

    
 
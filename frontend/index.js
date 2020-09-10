
// destructuring variables from the library/ see notes line 34
// im just litteraly using an example giving by the library
// https://github.com/liabru/matter-js/blob/master/examples/mixed.js


document.addEventListener("DOMContentLoaded", event => {
Player.fetchPlayer()
// maze = new Maze(5,10)

});


const signInDiv = document.createElement('div')
signInDiv.setAttribute("id", "signInDiv")
document.body.appendChild(signInDiv)

const signInButton = document.createElement('button')
signInButton.setAttribute("id", "signInButton")
signInButton.innerText = `sign_in`
signInDiv.appendChild(signInButton)

const signUpButton = document.createElement('button')
signUpButton.setAttribute("id", "signUpButton")
signUpButton.innerText = `sign_up`
signInDiv.appendChild(signUpButton)
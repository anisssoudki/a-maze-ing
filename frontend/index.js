
// destructuring variables from the library/ see notes line 34
// im just litteraly using an example giving by the library
// https://github.com/liabru/matter-js/blob/master/examples/mixed.js


document.addEventListener("DOMContentLoaded", event => {
  renderForm()
Player.fetchPlayer()
// maze = new Maze(5,10)

});

function renderForm() {
  const loginForm = document.createElement('form')
  loginForm.setAttribute("id","loginForm")
  
  const signUpForm = document.createElement('form')
  signUpForm.setAttribute("id","signUpForm")
  
  const signInDiv = document.createElement('div')
  signInDiv.setAttribute("id", "signInDiv")
  document.body.appendChild(signInDiv)
  signInDiv.appendChild(loginForm)
  signInDiv.appendChild(signUpForm)
  
  
  const signInButton = document.createElement('button')
  signInButton.setAttribute("id", "signInButton")
  signInButton.innerText = `sign_in`
  loginForm.appendChild(signInButton)
  
  
  const signUpButton = document.createElement('button')
  signUpButton.setAttribute("id", "signUpButton")
  signUpButton.innerText = `sign_up`
  signUpForm.appendChild(signUpButton)
  
  
  signInButton.addEventListener('click', event => {
      let signInDiv = event.target.parentElement;
      signInDiv.innerHTML = `<form id="loginForm"> 
        <label> PlayerName </label>
        <input name="name" type="text" placeholder="PlayerName">
        <button id="signInBtn" type="submit">Submit</button>
      </form>`;
      
    });
  
    signUpButton.addEventListener('click', event => {
        event.preventDefault()
      let signInDiv = event.target.parentElement;
      signInDiv.innerHTML = `<form id="signUpForm"> 
        <label> NewPlayerName </label>
        <input name="name" type="text" placeholder="NewPlayerName">
        <button id="signUpBtn" type="submit">Submit</button>
      </form>`;
  
  
  });
       
  signInDiv.addEventListener('submit', event => {
      event.preventDefault()
      let input = event.target.name.value
      let eventId = event.target.id 
      // console.log(eventId)
      // console.log(input)
  
      if (eventId === `signUpForm`) {
      //  we are gonna create the player 
      Player.createPlayer(input)
      // chain .then here
      .then(player => {
        signInDiv.innerHTML = `<div class="signOutBanner">signed in as ${player.name}<button id="signout">signout</button></div>
        <div id="userDiv" data-id="${player.id}"></div>`
      })
      }
      else {
            // we are gonna find the player 
            Player.getPlayers(input)
            .then(players =>
               {         
                  for (player of players) 
                    {
                          if (player.name.toLowerCase() === input.toLowerCase())
                        signInDiv.innerHTML = `<div class="signOutBanner">welcome back ${player.name}<button id="signout">signout</button></div>
                        <div id="${player.name}">${player.id}</div>
                        `
                        
                    }
                 
                    console.log(input)  
                   
                    let ShowMazeReocrds = document.createElement('button')
                    let userdivselector = document.getElementById(`${input.toLowerCase()}`) 
                    let UserId = userdivselector.innerHTML
                    let difficultyForm = document.createElement('div') 
                    difficultyForm.innerHTML = `<form>
                    <input list="level" name="level"> enter num between 5 and 20 for Maze difficulty level
                    <input type="submit">
                  </form>`

                   difficultyForm.setAttribute("id",`${UserId}`)
                    ShowMazeReocrds.setAttribute("id", `${UserId}`)
                 
                    ShowMazeReocrds.innerText = "show Maze Scores"
                   
                   
                    document.body.appendChild(ShowMazeReocrds)
                    document.body.appendChild(difficultyForm)
                   
                    difficultyForm.addEventListener('submit', event => {Maze.getBodyObject(event)})
                    
                    ShowMazeReocrds.addEventListener('click', event => {
                      event.preventDefault()
                    Maze.fetchMazeRecordForPlayer(UserId)
                    
                    })
                }
                
              )
             
             
            
           }
  })
  

}

    
 
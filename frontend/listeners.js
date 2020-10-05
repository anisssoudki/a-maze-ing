function showMenu(players, input) {
  for (player of players) 
  {
        if (player.name.toLowerCase() === input.toLowerCase())
      signInDiv.innerHTML = `<div class="signOutBanner">welcome  ${player.name}<button id="signout">signout</button></div>
      <div id="${player.name}">${player.id}</div>
      `
      
  }


 
  let ShowMazeReocrds = document.createElement('button')
  let HideMazeReocrds = document.createElement('button')
  let userdivselector = document.getElementById(`${input.toLowerCase()}`) 
  let UserId = userdivselector.innerHTML
  if (UserId === null) {window.alert("you must sign up")}
  userdivselector.remove()
  let difficultyForm = document.createElement('div') 
  difficultyForm.innerHTML = `<form>
  <input hidden="true" list="level" name="level"> 
  <input id="StartGameSubmitBtn" type="submit" value="StartGame">
</form>`
let signoutbtn = document.getElementById("signout")
console.log(signoutbtn)
signoutbtn.addEventListener('click', event => {
  event.preventDefault()
  wipeDom()
  
   
  })
  difficultyForm.setAttribute("id",`${UserId}`)
  ShowMazeReocrds.setAttribute("id", `${UserId}`)

  ShowMazeReocrds.innerText = "show Maze Scores"
  HideMazeReocrds.innerText = "Hide Maze Scores"
 
  document.body.appendChild(ShowMazeReocrds)
  document.body.appendChild(HideMazeReocrds)
  document.body.appendChild(difficultyForm)
   
  difficultyForm.addEventListener('submit', event => {Maze.getBodyObject(event),  pauseGame()})
 
  ShowMazeReocrds.addEventListener('click', event => {
    event.preventDefault()
  Maze.fetchMazeRecordForPlayer(UserId)
  

  })
  HideMazeReocrds.addEventListener('click', event => {
    event.preventDefault()
let records = document.getElementById("mazeDetails")
records.remove()
  })
let playerDeleteDiv = document.createElement('div')
document.body.appendChild(playerDeleteDiv)
playerDeleteDiv.innerHTML = `<form method="DELETE">
<button id="delbtn" type="button" class="deletebtn">Delete</button>
</form>`
playerDeleteDiv.addEventListener('click', event => {
event.preventDefault()
parsedUserId = parseInt(UserId, 10)


Player.deletePlayerAndAllMazeRecords(parsedUserId, signInDiv)
wipeDom()

})
}

function listeners() {    
    signInDiv.addEventListener('submit', event => {
        event.preventDefault()
        let input = event.target.name.value.toLowerCase()
        let eventId = event.target.id 
        // console.log(eventId)
        // console.log(input)
    
        if (eventId === `signUpForm`) {
        //  we are gonna create the player 
        Player.createPlayer(input)
        // chain .then here
        
      
        .then(player => {
         if (player.errors !== undefined) {return window.alert(player.errors)}
          signInDiv.innerHTML = `<div class="signOutBanner">signed in as ${player.name}<button id="signout">signout</button></div>
          <div id="userDiv" data-id="${player.id}"></div>`
          Player.getPlayers(input)
          .then(players =>
             {         
              showMenu(players, input)
              }
              
            )
               
           
        })
        .catch(error => console.log(error))
        }
        
        else {
              // we are gonna find the player 
              Player.getPlayers(input.toLowerCase())
              .then(players =>
                {         
                  showMenu(players, input)
                 }
                 
               )
               
               
              
             }
    })
    
  
  }
  
  
  
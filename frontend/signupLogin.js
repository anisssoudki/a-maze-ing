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
                if (UserId === null) {window.alert("you must sign up")}
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
                
              let playerDeleteDiv = document.createElement('div')
              document.body.appendChild(playerDeleteDiv)
            playerDeleteDiv.innerHTML = `<form method="DELETE">
            <button id="delbtn" type="button" class="deletebtn">Delete</button>
            </form>`
            playerDeleteDiv.addEventListener('click', event => {
              event.preventDefault()
              parsedUserId = parseInt(UserId, 10)
              console.log(parsedUserId)
              console.log(input)
              console.log(signInDiv)
              console.log(event)
             
              Player.deletePlayerAndAllMazeRecords(parsedUserId, signInDiv)
             wipeDom()
           
            })
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
                    if (userdivselector === null) {window.alert("Playername doesnt exist You must signup with that name first")}
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
                    
                  let playerDeleteDiv = document.createElement('div')
                  document.body.appendChild(playerDeleteDiv)
                playerDeleteDiv.innerHTML = `<form method="DELETE">
                <button type="button" class="deletebtn">Delete</button>
                </form>`
                playerDeleteDiv.addEventListener('click', event => {
                  event.preventDefault()
                  parsedUserId = parseInt(UserId, 10)
                  console.log(parsedUserId)
                  console.log(input)
                  console.log(signInDiv)
                  console.log(event)
                
                  Player.deletePlayerAndAllMazeRecords(parsedUserId, signInDiv)
                  wipeDom()
                 
                  
                })
                }
                
              )
             
             
            
           }
  })
  

}



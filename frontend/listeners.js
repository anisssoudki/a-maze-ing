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
                  <input type="submit" value="StartGame">
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
                      let HideMazeReocrds = document.createElement('button')
                      let userdivselector = document.getElementById(`${input.toLowerCase()}`) 
                      if (userdivselector === null) {window.alert("Playername doesnt exist You must signup with that name first")}
                      let UserId = userdivselector.innerHTML
                      console.log(userdivselector)
                      userdivselector.remove()
                    
                      let difficultyForm = document.createElement('div') 
                      difficultyForm.innerHTML = `<form>
                      <input hidden="true" list="level" name="level"> 
                      <input type="submit" value="StartGame">
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
                     
                      difficultyForm.addEventListener('submit', event => {Maze.getBodyObject(event),pauseGame()})
                     
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
                  <button type="button" class="deletebtn">Delete Player and all mazes</button>
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
  
  
  
class Player
 {
        static all = [];

        constructor(data)
            {
               
                this.name = data.name;
                this.save();
            }
            save() 
            {
                Player.all.push(this);
                
            }

            static baseUrl() 
            {
                return `http://localhost:3000/`;
            }
            
            static getHeaders()
            {
                return  {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                        }
            }
            
            static fetchConfig(verb, bodyObject) 
            {
                return {
                            method: verb,
                            headers: this.getHeaders(),
                            body: JSON.stringify(bodyObject)
                        }
            }
        
            static fetchPlayer() 
                {
                fetch(Player.baseUrl()+'players')
                .then(resp => resp.json())
                .then(playerarr => 
                    
                    {
                        
                            playerarr.forEach(function(obj)
                            {
                                // console.log(obj)
                            
                            let player = new Player(obj)
                            
                            
                            }
                            
                    )
                    
                    // this.renderPlayers()     
                    }) 
                
                    
                }
                static renderPlayers() 
                {
                  
                    
                   let div = document.createElement("div")
                   document.body.appendChild(div)

                   
                     Player.all.forEach(function(element)
                                            {
                                               
                                                let h2 = document.createElement("h2") 
                                                h2.textContent  = `Player:${element.name}`
                                                div.appendChild(h2) 
                                                
                                            }
                                        )
                }

   

                  static getPlayers() {
                    return fetch(this.baseUrl() + `players`).then(res => res.json());
                  }


                  static getPlayer(playerId) 
                  {
                    return fetch(this.baseUrl() + `players/${playerId}`);
                  }

                static createPlayer(name) 
                {
                    return fetch(this.baseUrl() + `players`, this.fetchConfig("POST", {name}))
                    .then(res => res.json().then(this.renderPlayers()));
                }

                static updatePlayer(){}

                static deletePlayerAndAllMazeRecords(playerId,element)
                {
                    fetch(this.baseUrl() + `players/${playerId}`,
                    {
                        method: 'DELETE', 
                        headers: { 
                                     'Content-type': 'application/json'
                                 } 
                    })
                    .then(res =>window.alert(`${res.statusText} player with id ${playerId} is deleted`))
                    
                    .catch(error =>window.alert(error))  
                 }
    }
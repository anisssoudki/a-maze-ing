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

                // static playerObjCreation(event)
                // {
                //     event.preventDefault() 
                //     const form = event.target.elements 
                //     const playerName = form.playerName.value
                //     const PlayerObj =  Player.findPlayer(playerName)
                //     const configBodyObj = {}
                //     configBodyObj.player = PlayerObj
                //     createPlayer(configBodyObj)
                // }

                static findPlayer(attr, attrVal) 
                  {
                    return (this.all.find(obj => {return obj[attr] === attrVal}))
                  }


                  static getPlayers() {
                    return fetch(this.baseUrl() + `players`).then(res => res.json());
                  }


                  static getPlayer(playerId) 
                  {
                    return fetch(this.baseUrl() + `users/${playerId}`).then(res => res.json());
                  }

                static createPlayer(name) 
                {
                    return fetch(this.baseUrl() + `players`, this.fetchConfig("POST", {name}))
                    .then(res => res.json().then(this.renderPlayers()));
                }

                static UpdatePlayer(){}
                static DeletePlayerAndAllMazeRecords(){}
    }
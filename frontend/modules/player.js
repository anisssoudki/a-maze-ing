class Player
 {
        static all = [];

        constructor(data)
            {
                this.id = data.id;
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
                                console.log(obj)
                            
                            let player = new Player(obj)
                            
                            
                            }
                            
                    )
                    
                    this.renderPlayers()     
                    }) 
                
                    
                }
                static renderPlayers() 
                {
                     let div = document.createElement("div")
                     document.body.appendChild(div)
                     Player.all.forEach(function(element)
                                            {
                                                let h2 = document.createElement("h2") 
                                                h2.innerText = `ID:${element.id} Player:${element.name}`
                                                div.appendChild(h2) 
                                            }
                                        )
                }

                static createPlayers(name) 
                {
                    return fetch(this.baseUrl() + `players`, this.fetchConfig("POST", {name}))
                    .then(res => res.json());
                }
    }
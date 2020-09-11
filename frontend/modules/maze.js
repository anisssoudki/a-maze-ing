

class Maze {

     static all = [];

    constructor(data)
        {
           
            this.difficulty = data.difficulty;
            this.time = data.time 
            this.player_id = data.player_id
            this.startgame()
            this.save()
        }

    save() 
        {
            Maze.all.push(this);
            
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


     
        static renderRecordOfGamesForPlayer(input,output) 
        {
        
        }

        static fetchMazeRecordForPlayer(player_id) 
        {
            let div = document.createElement("div")
            document.body.appendChild(div)
            fetch(Maze.baseUrl()+`players/${player_id}/mazes`)
            .then(resp => resp.json())
            .then(data => 
                data.forEach(function(obj)
                {console.log(obj)
                    
                     
                        let h2 = document.createElement("h2") 
                        h2.textContent  = `${obj.player.name} Maze record: Maze id:${obj.id}, difficulty:${obj.difficulty}, time:${obj.time}, player id :${obj.player_id} `
                        div.appendChild(h2) 
                        
              }
              ))}

              static getBodyObject(event)
              {
                 event.preventDefault()
                 console.log(event)
                 const  level = event.target[0].value
                 event.target.id = event.target.parentElement.id
                 let difficultyForm =   event.target.id
    // we need to code out the maze than make sure we pass in the correct parameters to generate it
                    let mazePlayerId = parseInt(difficultyForm, 10)
                   let mazeDifficultyLevel = parseInt(level, 10)
                   console.log(mazeDifficultyLevel)
                   const bodyObject = {}
                   bodyObject.difficulty = mazeDifficultyLevel
                   bodyObject.time = 60
                   bodyObject.player_id = mazePlayerId
                   
                    // Maze.getBodyObject(event)
                    // ==> // Player.PlayGameAndSaveRecord(difficulty,time,userid)
                   
                  
                  
                  //  wipe   Maze.fetchMazeRecordForPlayer(UserId)
                  // and redisplay button 
                  
                 
              
                  event.target.remove()

               
               
                
                Maze.PlayGameAndSaveRecord(bodyObject)
              }


              static PlayGameAndSaveRecord(bodyObject) 
              {
              let  maze = new Maze(bodyObject)
                fetch(Maze.baseUrl()+`players/${bodyObject.player_id}/mazes`,  this.fetchConfig('POST', bodyObject))
                .then(res => res.json())
                .then(data =>{console.log(data)
                   
                })
                   
                    
                
               

              }
          
        































                startgame() 
                {
                    

                        const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter;
                        const width = 800;
                        const height = 600
                        // when we create the engine we get a world object along with it
                        // create engine
                        const engine = Engine.create(); 
                        const { world } = engine; 
                        // create renderer-this is an additive process to document.body in other words it will not destroy any element inside of the body in the html
                        const render = Render.create({
                            element: document.body,
                            engine: engine, 
                            options: {
                                wireframes: false,
                                width,
                                height
                            }
                        });
                    
                        Render.run(render);
                        Runner.run(Runner.create(), engine);
                    
                        function shape(x,y,width,height,options) {
                            return Bodies.rectangle(x, y, width, height, options);
                        } 
                    
                        // console.log(shape)
                    
                        // console.log(world)
                        //  => we can see all the shapes we created in the console 
                    
                        const walls = 
                        [
                        shape(400, 0, 800, 40, {isStatic: true, render:{fillStyle:"purple"}}),
                        shape(0, 400, 40, 800, {isStatic: true, render:{fillStyle:"purple"}}),
                        shape(400, 600, 800, 40, {isStatic: true, render:{fillStyle:"purple"}}),
                        shape(800, 300, 40, 800, {isStatic: true, render:{fillStyle:"purple"}})
                        ]
                    
                        World.add(world, walls);
                        World.add(world, MouseConstraint.create(engine,{
                            mouse: Mouse.create(render.canvas)
                        }))
                    
                        for (let i=0; i < 20; i++){
                        World.add(world, shape(Math.random()*width, Math.random()*height, 40, 40, {isStatic: false})) 
                        }
                    
                }
        
                


}
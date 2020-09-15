

class Maze {

     static all = [];

    constructor(data)
        {
           
            this.difficulty = data.difficulty;
            this.time = data.time 
            this.player_id = data.player_id
            this.startgame(data.difficulty)
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
            let div = document.getElementById("mazeDetails")
            if (div === null) {
                div = document.createElement("div")
                div.setAttribute("id","mazeDetails")
                document.body.appendChild(div)
            }
            else {
                div.innerHTML=""
            }
             
            
           
           
            fetch(Maze.baseUrl()+`players/${player_id}`)
            .then(resp => resp.json())
            .then(data => 
               data.mazes.forEach(element => 
                
                {
                    
            //         //  abstract 
                        let h2 = document.createElement("h2") 
                        h2.textContent  = `Maze Details: id:${element.id}, level: ${element.difficulty}, timer: ${element.time},
                        Score=${element.difficulty*element.time}
                        `
                        div.appendChild(h2) 
                        
            //   }
                }))}

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
                   bodyObject.difficulty = parseFloat(mazeDifficultyLevel || 5, 10).toFixed(2)
                   let currentOffset ;
                  
                   let timer = new Timer(((bodyObject.difficulty*4.00)+5.00).toFixed(2),{
                    onStart() {
                        window.alert("Get ready click OK to start the game")
                    },
                    onTick(timeRemaining) {
                        // console.log(timeRemaining)
                        const circle = document.querySelector('circle');
                        currentOffset = ((bodyObject.difficulty*4.00)+5.00).toFixed(2);
                        // console.log(currentOffset)
                        // console.log(timeRemaining)
                        // console.log( (((45*Math.PI*2)*timeRemaining/currentOffset) - (45*Math.PI*2)))
                        circle.setAttribute('stroke-dashoffset', (((45*Math.PI*2)*timeRemaining/currentOffset) - (45*Math.PI*2)));
                        
                    },
                    onComplete(i) {
                         console.log(i)
                    }})

                   bodyObject.time = timer.duration 
                   timer.onStart()
                   timer.onTick()
                //  timer.onComplete()
                
                   bodyObject.player_id = mazePlayerId
                   console.log(bodyObject)
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
          
        





























 
// probably gonna have several arguments in this instance method like ball target maze difficulty time 
// than make the class create an instance everytime new is called everythng start from here
                startgame(difficulty) 
                {
                    
                    if (difficulty > 15){
                        audio2.play()
                    } 
                    else {
                        audio1.play()
                    }
                    
                    document.body.appendChild(pauseBtn)
                    

                        const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter;
                        const cells = 3 // this will abstract out the 3by3 maze to generate a bigger maze
                       function shuffle(arr) {
                            let counter = arr.length; //decrement this in the loop because we want to start at arr.length-1
                            while (counter > 0)  //counter
                            {
                            const index = Math.floor(Math.random()*counter); //random number between 0 and counter
                            counter --; 
                            const temp = arr[counter]; //temp array where we can get the random index positions value 
                            arr[counter] = arr[index]; //take the array at random index and sawp it with the initial array;s index
                            arr[index] = temp; //target index position in the loop passing and put the temp value into that
                            }
                            return arr; //return the array
                        }
                        const width = 600;
                        const height = 600;
                        const unitLength = width / cells; //if cells = 3 and width is 600 than every cell would be 200 px in width
                        
                        
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
                    
                        function createWall(x,y,width,height,options) {
                            return Bodies.rectangle(x, y, width, height, options);
                        } 
                    
                        // console.log(shape)
                    
                        // console.log(world)
                        //  => we can see all the shapes we created in the console 
                    
                        const walls = 
                        [
                            createWall(width/2, 0, width, 40, {isStatic: true, render:{fillStyle:"purple"}}),
                            createWall(width/2, height, width, 40, {isStatic: true, render:{fillStyle:"purple"}}),
                            createWall(0, height/2, 40, height, {isStatic: true, render:{fillStyle:"purple"}}),
                            createWall(width, height/2, 40, height, {isStatic: true, render:{fillStyle:"purple"}})
                        ]
                    
                        World.add(world, walls);
                        World.add(world, MouseConstraint.create(engine,{
                            mouse: Mouse.create(render.canvas)
                        }))
                    
                        // for (let i=0; i < difficulty; i++){
                        // World.add(world, shape(Math.random()*width, Math.random()*height, 40, 40, {isStatic: false})) 
                        // }
                    
                        //maze generation
                        const grid = Array(cells).fill(null).map(() => Array(cells).fill(false))
                    
                        const verticals = Array(cells).fill(null).map(() => Array(cells-1).fill(false))

                        const horizontals = Array(cells-1).fill(null).map(()=> Array(cells).fill(false))

                        // maze starting cell - this is going to be random
                        const startRow = Math.floor(Math.random()*cells);
                        const startColumn = Math.floor(Math.random()*cells)
                        // see notes line 107 for the method below
                        const stepThroughCell = (row,column) => {
                          
                            if (grid[row][column] === true){return;}
                            grid[row][column] = true; 
                            const neighbors = 
                            shuffle( [
                                
                             [row - 1, column, 'up'], //up
                             [row, column + 1, 'right'], //right
                             [row + 1, column, 'down'], //down
                             [row, column - 1, 'left'] //left
                             ]); 
                          for (let neighbor of neighbors){ //refers to every array inside of the neighbors const

                        const[nextRow, nextColumn, direction] = neighbor; //destructuring nextRow and nextColumn so we have them as variables
                        //check neighbor out of bounds
                        if(nextRow<0||nextRow>=cells||nextColumn<0||nextColumn>=cells) {continue;} //using those variable to check conditional logic for outof bounds
                        // neighbor visited? continue to next neighbor
                        
                        if(grid[nextRow][nextColumn]) {continue;} //mark the cell visited by changing the value to true
                        // console.log(grid[nextRow][nextColumn])

                        // remove a wall from either horizantals or verticals
                        // right left for verticals because we are staing in the same row
                        // top bottom for horizontals because we will be on the same column
                              if(direction === 'left')
                            {
                                verticals[row][column - 1] = true;
                            }  else if (direction === 'right') 
                            {
                                verticals[row][column] = true;
                            }  else if (direction === 'up') 
                            {
                                horizontals[row -1][column] = true;
                            }  else if (direction === 'down') 
                            {
                                horizontals[row][column] = true;
                            }
                            stepThroughCell(nextRow,nextColumn)
                          }
                            }
                        
                        stepThroughCell(startRow,startColumn)
                        horizontals.forEach
                        ((row, rowIndex) => 
                            {
                                row.forEach
                                ( (open, columnIndex) => 
                                 {
                                 if(open === true)
                                   {
                                     return;
                                   }
                                   const wall = Bodies.rectangle(
                                       columnIndex*unitLength + unitLength/2,
                                       rowIndex*unitLength + unitLength,
                                       unitLength,
                                       10,
                                       {
                                           isStatic:true
                                       }
                                   );
                                   World.add(world, wall)
                                 }
                                )
                            } 
                        )
                        verticals.forEach((row, rowIndex)=>{
                            row.forEach((open,columnIndex) =>{
                                if (open === true) 
                                {
                                    return;
                                }
                                const wall = Bodies.rectangle(
                                    columnIndex*unitLength + unitLength,
                                    rowIndex*unitLength +unitLength/2,
                                    10,
                                    unitLength,
                                    {isStatic: true}
                                )
                                World.add(world, wall)
                            })
                        })

                        console.log(verticals)
                        console.log(horizontals)
                      
                        const canvas = document.querySelector('canvas')
                    canvas.style.backgroundColor = "transparent"
                }
        
                


}

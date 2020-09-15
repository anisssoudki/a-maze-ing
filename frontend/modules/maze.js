

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
                    
                    if (difficulty > 15 && difficulty < 29){
                        audio1.pause()
                        audio2.play()
                    } else if (difficulty >= 30)
                    {mcHammerSuperLevel()}
                    else {
                        audio1.play()
                    }
                    
                    document.body.appendChild(pauseBtn)
                    
                    const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

                    const cellsHorizontal = parseInt(difficulty, 10);
                    const cellsVertical = parseInt(difficulty, 10);
                    const width = window.innerWidth*.9;
                    const height = window.innerHeight*.5;
                    
                    const unitLengthX = width / cellsHorizontal;
                    const unitLengthY = height / cellsVertical;
                    
                    const engine = Engine.create();
                    engine.world.gravity.y = 0;
                    const { world } = engine;
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
                    
                    // Walls
                    const walls = [
                      Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
                      Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
                      Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
                      Bodies.rectangle(width, height / 2, 2, height, { isStatic: true })
                    ];
                    World.add(world, walls);
                    
                    // Maze generation
                    
                    const shuffle = arr => {
                      let counter = arr.length;
                    
                      while (counter > 0) {
                        const index = Math.floor(Math.random() * counter);
                    
                        counter--;
                    
                        const temp = arr[counter];
                        arr[counter] = arr[index];
                        arr[index] = temp;
                      }
                    
                      return arr;
                    };
                    
                    const grid = Array(cellsVertical)
                      .fill(null)
                      .map(() => Array(cellsHorizontal).fill(false));
                    
                    const verticals = Array(cellsVertical)
                      .fill(null)
                      .map(() => Array(cellsHorizontal - 1).fill(false));
                    
                    const horizontals = Array(cellsVertical - 1)
                      .fill(null)
                      .map(() => Array(cellsHorizontal).fill(false));
                    
                    const startRow = Math.floor(Math.random() * cellsVertical);
                    const startColumn = Math.floor(Math.random() * cellsHorizontal);
                    
                    const stepThroughCell = (row, column) => {
                      // If i have visted the cell at [row, column], then return
                      if (grid[row][column]) {
                        return;
                      }
                    
                      // Mark this cell as being visited
                      grid[row][column] = true;
                    
                      // Assemble randomly-ordered list of neighbors
                      const neighbors = shuffle([
                        [row - 1, column, 'up'],
                        [row, column + 1, 'right'],
                        [row + 1, column, 'down'],
                        [row, column - 1, 'left']
                      ]);
                      // For each neighbor....
                      for (let neighbor of neighbors) {
                        const [nextRow, nextColumn, direction] = neighbor;
                    
                        // See if that neighbor is out of bounds
                        if (
                          nextRow < 0 ||
                          nextRow >= cellsVertical ||
                          nextColumn < 0 ||
                          nextColumn >= cellsHorizontal
                        ) {
                          continue;
                        }
                    
                        // If we have visited that neighbor, continue to next neighbor
                        if (grid[nextRow][nextColumn]) {
                          continue;
                        }
                    
                        // Remove a wall from either horizontals or verticals
                        if (direction === 'left') {
                          verticals[row][column - 1] = true;
                        } else if (direction === 'right') {
                          verticals[row][column] = true;
                        } else if (direction === 'up') {
                          horizontals[row - 1][column] = true;
                        } else if (direction === 'down') {
                          horizontals[row][column] = true;
                        }
                    
                        stepThroughCell(nextRow, nextColumn);
                      }
                    };
                    
                    stepThroughCell(startRow, startColumn);
                    
                    horizontals.forEach((row, rowIndex) => {
                      row.forEach((open, columnIndex) => {
                        if (open) {
                          return;
                        }
                    
                        const wall = Bodies.rectangle(
                          columnIndex * unitLengthX + unitLengthX / 2,
                          rowIndex * unitLengthY + unitLengthY,
                          unitLengthX,
                          5,
                          {
                            label: 'wall',
                            isStatic: true,
                            render: {
                              fillStyle: 'purple'
                            }
                          }
                        );
                        World.add(world, wall);
                      });
                    });
                    
                    verticals.forEach((row, rowIndex) => {
                      row.forEach((open, columnIndex) => {
                        if (open) {
                          return;
                        }
                    
                        const wall = Bodies.rectangle(
                          columnIndex * unitLengthX + unitLengthX,
                          rowIndex * unitLengthY + unitLengthY / 2,
                          5,
                          unitLengthY,
                          {
                            label: 'wall',
                            isStatic: true,
                            render: {
                              fillStyle: 'purple'
                            }
                          }
                        );
                        World.add(world, wall);
                      });
                    });
                    
                    // Goal
                    const goalRadius = Math.min(unitLengthX, unitLengthY) / 4;
                    const goal = Bodies.circle( width - unitLengthX / 2,
                        height - unitLengthY / 2,  goalRadius, {
                        label: 'goal',
                        render: {
                            isStatic: true,
                          fillStyle: 'green'
                        }
                      });
                    World.add(world, goal);
                    
                    // Ball
                    
                    const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
                    const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
                      label: 'ball',
                      render: {
                        fillStyle: 'purple'
                      }
                    });
                    World.add(world, ball);
                    
                    document.addEventListener('keydown', event => {
                      const { x, y } = ball.velocity;
                    
                      if (event.keyCode === 87) {
                        Body.setVelocity(ball, { x, y: y - .3 });
                      }
                    
                      if (event.keyCode === 68) {
                        Body.setVelocity(ball, { x: x + .3, y });
                      }
                    
                      if (event.keyCode === 83) {
                        Body.setVelocity(ball, { x, y: y + .3 });
                      }
                    
                      if (event.keyCode === 65) {
                        Body.setVelocity(ball, { x: x - .3, y });
                      }
                    });
                    
                    // Win Condition
                    
                    Events.on(engine, 'collisionStart', event => {
                      event.pairs.forEach(collision => {
                        const labels = ['ball', 'goal'];
                    
                        if (
                          labels.includes(collision.bodyA.label) &&
                          labels.includes(collision.bodyB.label)
                        ) {
                          world.gravity.y = 1;
                            
                      
                          world.bodies.forEach(body => {
                            if (body.label === 'wall') {
                              Body.setStatic(body, false);
                             
                             
                            }
                          });
                        }
                      });
                      engine.gravity.y = 1
                    });
                    const nextLevelBtn = document.createElement("button")
                    document.body.appendChild(nextLevelBtn)
                    nextLevelBtn.innerText="next level"
                    console.log(nextLevelBtn)
                    nextLevelBtn.addEventListener('click', event => {
                        event.preventDefault()
                        background()
                            nextLevelBtn.remove()
                            audio3.pause()
                            this.wipeCanvas()
                           let newDifficulty = parseInt(this.difficulty, 10) + 1
                        //    let newTimer = parseInt(this.time, 10) + 4
                           let playerId = this.player_id 
                           const newBodyObject = {}
                           newBodyObject.difficulty = parseFloat(newDifficulty, 10).toFixed(2)
                          
                       
                  
                     
        
                           newBodyObject.time = (newBodyObject.difficulty*4+5)
                           newBodyObject.player_id = playerId
                         let newLevelTimer =  document.getElementById('duration')
                         console.log(newBodyObject.time)
                         newLevelTimer.value = 0
                           newLevelTimer.value = parseInt(newBodyObject.time, 10)
                           console.log(newLevelTimer.value)
                          Maze.PlayGameAndSaveRecord(newBodyObject)
                      
                    })
                    
                     
                        const canvas = document.querySelector('canvas')
                    canvas.style.backgroundColor = "transparent"
                }
                wipeCanvas() {
                    document.getElementsByTagName("canvas")[0].remove()
                }
                


}

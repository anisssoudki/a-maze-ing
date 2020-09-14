class Timer {
    
    constructor(duration)
     {
        this.duration = duration 
       this.renderTimer(duration)
      
     }
     renderTimer(duration)
     {
        let makeTimerInput = document.createElement("input")
        document.body.appendChild(makeTimerInput)
        makeTimerInput.setAttribute("value", `${duration}`)
        makeTimerInput.setAttribute("id", `duration`)
        console.log(makeTimerInput.value)
         setInterval(this.tick,1000);
     }
    tick = () => 
    {
      let selectTimer = document.getElementById('duration')
     let timeRemaining = parseInt(selectTimer.value, 10)
   selectTimer.value = timeRemaining - 1
     
    }
}
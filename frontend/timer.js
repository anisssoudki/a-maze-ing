class Timer {
    
    constructor(duration, callbacks)
     {
        this.duration = duration 
       this.renderTimer(duration)
      this.createSvg()
       if(callbacks) 
         {
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete;
         }
      
     }

     renderTimer(duration)
     {
        if(this.onstart){this.onStart()}

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
     let timeRemaining = this.timeRemaining;
     if(timeRemaining <=0) {
                            this.pause()
                            if(this.onComplete){this.onComplete();}
                           }
     else {
            selectTimer.value = timeRemaining - 1;
            if(this.onTick){this.onTick()}
          }
   
     
    }
    pause = () => {clearInterval(setInterval(this.tick, 1000))}

    get timeRemaining() {
      let selectTimer = document.getElementById('duration')
       return parseInt(selectTimer.value, 10)
    }
    createSvg = () => 
    {
      let selectSvg = document.getElementById("svg")
      document.getElementById("svg").style.width = window.innerWidth
      selectSvg.innerHTML = `<circle r="45" cx="${window.innerWidth/2}" cy="50" fill="transparent" stroke="blue" stroke-width="10" stroke-dasharray="${Math.PI*45}">`
    }
}

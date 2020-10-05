class Timer {
    static all = [] 
    constructor(duration, callbacks)
     {
        this.duration = duration 
        this.renderTimer(duration)
        if(this.createSvg()) {this.createSvg().remove()}
        this.createSvg()
        this.save()
        if(callbacks) 
         {
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete;
         } 
     }

     save() 
     {
         Timer.all.push(this);
         
     }

     renderTimer(duration)
     {
      let makeTimerInput 
        if(this.onStart){this.onStart(this.timeRemaining(duration))}
    
   
         makeTimerInput = document.createElement("input")
        
        makeTimerInput.setAttribute("hidden","true")
        document.body.appendChild(makeTimerInput)
        makeTimerInput.setAttribute("value", `${duration}`)
        makeTimerInput.setAttribute("id", `duration`)
        console.log(makeTimerInput.value)
         setInterval(this.tick,50);
     }

    pause = () => {clearInterval(setInterval(this.tick, 50))}

    tick = () => 
    {
     let selectTimer = document.getElementById('duration')
     let timeRemaining = this.timeRemaining;
     if(timeRemaining <=0) {
                              return this.pause()
                           }
     else {
       
            selectTimer.value = timeRemaining - 0.05;
            if(this.onTick){this.onTick(this.timeRemaining)}
           
          }
    }
  

    get timeRemaining() 

    {
      let selectTimer = document.getElementById('duration')
      let value = parseFloat(selectTimer.value, 10).toFixed(2) 
      return value
    }

    set timeRemaining(time) 
    
    {
      this.durationInput.value = time;
    }
   
    createSvg = () => 
    {
     
      let selectSvg = document.getElementById("svg")
      document.getElementById("svg").style.width = window.innerWidth
      selectSvg.innerHTML = `<circle id="circle" r="15" cx="${window.innerWidth/2}" cy="25" fill="transparent" stroke="blue" stroke-width="10" stroke-dasharray="${Math.PI*45*2}" transform="rotate(-90 ${window.innerWidth/2} 50)">`
     
    }
}


const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")
const audio5 = document.getElementById("audio5")
const audio6 = document.getElementById("audio6")
const audio7 = document.getElementById("audio7")
const audio8 = document.getElementById("audio8")
const audio9 = document.getElementById("audio9")
const audio10 = document.getElementById("audio10")
const audio11 = document.getElementById("audio11")
const audio12 = document.getElementById("audio12")
const audio13 = document.getElementById("audio13")
const audio14 = document.getElementById("audio14")
const audio15 = document.getElementById("audio15")
const audio16 = document.getElementById("audio16")
const audio17 = document.getElementById("audio17")
const audio18 = document.getElementById("audio18")
const audio19 = document.getElementById("audio19")
const audio20 = document.getElementById("audio20")

const audioarray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10,audio11, audio12, audio13, audio14, audio15, audio16, audio17, audio18, audio19, audio20]

let pauseBtn = document.createElement("button")
pauseBtn.innerText="kill music"

function pauseMusic(array) {
    array.forEach(element => element.pause())
}
pauseBtn.addEventListener("click", event => {
    event.preventDefault(),
    pauseMusic(audioarray)
   
    
})

function playOnDifficulty(difficulty) {
difficulty = parseInt(difficulty)
    if (difficulty < 4) {audio1.play()}
   else if (difficulty === 5){audio1.pause(),audio1.play()} 
   else if (difficulty === 6){audio1.pause(),audio2.play()} 
   else if (difficulty === 7){audio2.pause(),audio3.play()} 
   else if (difficulty === 8){audio3.pause(),audio4.play()} 
   else if (difficulty === 9){audio4.pause(),audio5.play()} 
   else if (difficulty === 10){audio5.pause(),audio6.play()} 
   else if (difficulty === 11){audio6.pause(),audio7.play()} 
   else if (difficulty === 12){audio7.pause(),audio8.play()} 
   else if (difficulty === 13){audio8.pause(),audio9.play()} 
   else if (difficulty === 14){audio9.pause(),audio10.play()} 
   else if (difficulty === 15){audio10.pause(),audio11.play()} 
   else if (difficulty === 16){audio11.pause(),audio12.play()} 
   else if (difficulty === 17){audio12.pause(),audio13.play()} 
   else if (difficulty === 18){audio13.pause(),audio14.play()} 
   else if (difficulty === 19){audio14.pause(),audio15.play()} 
   else if (difficulty === 20){audio15.pause(),audio16.play()} 
   else if (difficulty === 21){audio16.pause(),audio17.play()} 
   else if (difficulty === 22){audio17.pause(),audio18.play()} 
   else if (difficulty === 23){audio18.pause(),audio19.play()} 
   else if (difficulty === 24){audio19.pause(),audio6.play()} 
   else if (difficulty === 25){mcHammerSuperLevel() } 



   
}

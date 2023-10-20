let btm = document.querySelector("#panelbtm")
let time = document.querySelector("#timer")
let score = document.querySelector("#score")
let even = document.querySelector("#panelbtm")
let rn ;
let scorecard = 0;

//=======================================bubbles=======================================================


function makebubbles(){
 let r=""  
        // btm.innerHTML = `<div class="bubble">123</div>`//override
        for(let i=0;i<144;i++){
            let num = Math.floor(Math.random()*10)
                     r += `<div class="bubble">${num}</div>`
                     btm.innerHTML = r 
                     
                    }  

     
}
makebubbles()

// =============hit==================


function hitfunction(){

    
    let hit = document.querySelector("#hit")
     rn =Math.floor(Math.random()*10)
    hit.innerHTML = rn
    
}
hitfunction()
    //====================================scorecard=======================
    function scorecardfunction(){

        scorecard += 10;
        score.innerHTML = scorecard
    }
// =====================event bubbling =======================
even.addEventListener("click",function(data){
   let p = Number(data.target.textContent)
   if(rn === p){
    scorecardfunction()
    makebubbles()
    hitfunction()
   }
})

// ========================timer==================

let timer = 30
    let y = setInterval(() => {
        if(timer > 0){
        timer--
        time.innerHTML = timer
        }
        else{
            clearInterval(y)
            btm.innerHTML = ""
            swal("Game Over!", `your score is${scorecard}`);

            
        }
    }, 1000);
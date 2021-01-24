window.onload = function() {
    let colorDispaly = document.querySelector("#colorDisplay");
    let reset = document.querySelector("#newgame");
    let message = document.querySelector("#message");
    let mode = document.querySelectorAll(".mode");
    let squares = document.querySelectorAll(".square");
    let picked_color='' ;
    let Lucky_color ='';
    let flag = [0, 1];
    let clicked= 1 ;
    let sqClick = 0;
    let c = [];
    let n = 6;

 


    reset.addEventListener("click", function(){
        clickedOne(clicked);
    });



    function makeColor(){
        let color = ''; 
        for(let i = 0; i<3; i++){ 
            color += Math.floor(Math.random()*256);
            color += ','; 
        }
        return color.slice(0,color.length-1);
    }


    function square(n){
        if(n == 3){
            for(let i=n; i<6; i++)
            squares[i].style.backgroundColor = "black";
        }
        for(let i=0; i<n; i++){
            c[i] = "RGB("+ makeColor()+")";
            squares[i].style.backgroundColor = c[i];
        }
        Lucky_color = c[Math.floor(Math.random()*(n-1))];
        colorDispaly.textContent = Lucky_color;    
    }

    function modeChangerActive(mode, i){
        mode.style.backgroundColor = "royalblue" ;
        mode.style.color="white" ;
        flag[i] = 1;
    }
    function modeCHangerInactive(mode, i){
        mode.style.backgroundColor = "white" ;
        mode.style.color= "royalblue";
        flag[i] = 0;
    }
   function clickedOne(clicked){
       message.textContent = '';
       if(clicked == 0){ 
            n = 3;
            modeCHangerInactive(mode[1],1);
            square(n);
        }
        else if(clicked == 1){
            n=6;
            modeCHangerInactive(mode[0], 0);
            square(n);
        }
   }
    for(let i=0; i<2; i++){
        mode[i].addEventListener("click", function(){
            clicked = i;
            console.log(clicked);
            modeChangerActive(mode[i], i);  
            clickedOne(clicked);                  
            
        });
    }
    
    for(let i =0; i<n; i++){
        squares[i].addEventListener("click",function(){
            picked_color = c[i];
            console.log(picked_color, i);
            sqClick = 1;
            if(sqClick == 1){
            sqClick = 0;
            if(Lucky_color == picked_color)
                message.textContent = "Hurrah You won" ;     
                             
            else {
                message.textContent = "Try Again" ;
              
            }
                
        }
    
        else
            message.textContent = '';
        });
        
    }
    square(n);
}

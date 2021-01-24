let updatesec = document.getElementById('sec');
let updateten = document.getElementById('ten');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let sec = 00;
let ten = 00;
let interval;
 function start1(){
    clearInterval( interval); 
    interval = setInterval(startTimer, 10);
}   

function stop1(){
    clearInterval(interval);
}

function reset1() {
    clearInterval(interval);
    ten = 00;
    sec = 00;
    updatesec = 00;
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('ten').innerHTML = '00';
    
}
    
    
function startTimer(){
    ten++;
    if (ten < 10){
        document.getElementById('ten').innerHTML = '0' + ten;
        
    }
    if(ten > 9){
        document.getElementById('ten').innerHTML = ten;
    }
    if(ten > 99)
    {
        ten = 0;
        updatesec = ++sec;
        document.getElementById('sec').innerHTML = '0' + updatesec;
        document.getElementById('ten').innerHTML = '0' + ten;
    }
    if (updatesec > 9){
        document.getElementById('sec').innerHTML =  updatesec;
    }
    console.log(ten);
    console.log(sec);
}
window.onload = function() {
let operator = document.querySelectorAll('.operator div')
let num = document.querySelectorAll('.num div')
let input = document.getElementById('input');
let result = document.getElementById('result');
// let clear = document.getElementById('clear');
let currentString = ''; 
let first = [];
let op = [0];
let start = 0;
let lastchar = '';
let prevstr = '';
let c= 0;


for ( let i = 0; i<num.length; i++)
{
    num[i].addEventListener("click", function(e){
        let value =  e.target.innerHTML;
        if (prevstr != '')
        {
            currentString = '';
            prevstr = '';
        }
        
                
        currentString +=  value ;
                if (value == 'C' ){                                       // clear
                    currentString = '';
                    first = [];
                    op = [0];
                    result = 0;
                    start = 0;
                    lastchar ='';
                }
                if (value == '←'){
                    console.log(lastchar);
                    if(lastchar == '+' ||lastchar == '-' || lastchar == '×' || lastchar == '÷'){
                        op.pop();
                        c += 1;
                        start -=1;
                        console.log("op ", op);
                    }
                    else if (lastchar == undefined){
                        currentString = '';
                    }
                    else {
                        if( c >= 1){
                            delValue = first.pop();
                            delValue = Math.floor(delValue/10);
                            start -= 1;
                            if (delValue != 0)
                                first.push(delValue);
                            
                            console.log( "remain  " ,delValue, "  rem len ", delValue.length);
                            console.log('first' , first);
                        }
                    }
                    currentString = currentString.substr(0,currentString.length-2);
                    if(currentString == '')
                        start = 0;    
                }
                
                console.log('currentString : '+currentString);              // for developer
                lastchar = currentString[currentString.length-1]; 
                input.innerHTML = currentString;    
    } );
}

for ( let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e){
        let value =  e.target.innerHTML;
        currentString +=  value ;
        console.log('currentString  ',currentString);
        if ( ((currentString == value) || (lastchar == '-'))  &&  (value == '+' || value == '×' || value == '÷'))
        {
            // first = [];
            // op= [0];
            currentString = '';
            input.innerHTML = '';
        }
        else {
        
        // lastchar = currentString[currentString.length-1];
        // first.push(currentString.slice(start,currentString.length-1) ); 
        // start = currentString.length;
        console.log("last char = "+ lastchar);
        if (lastchar == '+' || lastchar == '-' || lastchar == '×' || lastchar == '÷'){
            currentString = currentString.substring(0,start-1)+value;
            input.innerHTML = currentString;
            op.pop();
            op.push(value);
        }else { input.innerHTML = currentString;
            valueToPush = currentString.slice(start,currentString.length-1)
            if(valueToPush != ''){
                console.log('value to push', valueToPush);
                 first.push(valueToPush ); 
            start = currentString.length;
            op.push(value);
            }
           
        }
        console.log(i , first , op);
        // console.log(lastchar  ,"last char , i ",   i);
        lastchar = currentString[currentString.length-1]; 
        prevstr = '';
        }
    });
}

result.addEventListener("click", function(e){
    let value =  e.target.innerHTML
        currentString +=  value ;
    first.push(currentString.slice(start,currentString.length-1) );
           
    // calculations
    let result1 = Number(first[0]);
    console.log( 'result - First ',first);
    for(let i =1; i<op.length; i++){
        let v = Number(first[i]);console.log(v,op[i]);
        if(op[i] == '+')
            result1 += v;
        else if(op[i] == '-')
           result1 -=  v;
        else if(op[i] == '×')
        result1 *=  v;
        else if(op[i] == '÷')
        {
            
            if (v != 0)
            result1 /= v;
            else{
                result1 = "Divde by zero error";
                break;
            }
            
        }     
    }
    
     console.log('result :' +result1);
            input.innerHTML = result1;
    first = [];
    op = [0];
    // result = 0;
    start = 0;
    lastchar = currentString[start-1]; 
    currentString =result1;
    prevstr = result1;
    
          
       
       
           

        
    

});






}



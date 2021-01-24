window.onload = function(){
    let input = document.getElementById('input');
    let num = document.querySelectorAll('.num div');
    let operator = document.querySelectorAll('.operator div ');
    let result = document.getElementById('result');
    let arr = [];
    let op = [0];
    let currentString = '';
    let lastChar = '';
    let prevStr = '';

    for( let i = 0; i<num.length ; i++){
        num[i].addEventListener("click", function(e){
            let value = e.target.innerHTML;
            
            if (prevStr != ''){
                currentString = '';
                prevStr = '';
                arr = [];
            }          
            currentString += value;
            if ( value == 'C'){
                currentString = '';
                arr = [];
                op = [0];
                result1 = 0;
                lastChar = '';
            } // IF - claer screen  
            else if( value == '←') 
            {
                if(lastChar == '+' || lastChar == '-' || lastChar == '×' || lastChar == '÷'){
                    op.pop();
                    arr.pop();
                }
                else
                    arr.pop();         
                currentString = currentString.substring(0,currentString.length-2);
            }         
            else
                arr.push(value);
            input.innerHTML = currentString;
            lastChar = currentString[currentString.length-1];
            console.log(lastChar);
                        
            console.log('arr : ', arr,'  value', value);
        }); // event listener
    }// num- for loop

    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function(e){
            let value = e.target.innerHTML;
            prevStr = '';
            if(currentString != ''){
                if (lastChar == '+' || lastChar == '-' || lastChar == '×' || lastChar == '÷'){
                    currentString = currentString.substring(0,currentString.length-1) + value;
                    op.pop();
                }
                else {
                    arr.push('-');
                    currentString += value;
                }
                op.push(value);                
                input.innerHTML = currentString;
                lastChar = currentString[currentString.length-1];
            }
            
            console.log('op : ', op,'  value', value);
        }); //event listener
    } // operator - for loop

    result.addEventListener("click", function(e){
        value = e.target.innerHTML;
        console.log('arr : ', arr,'  op  ',op,'  value  ', value);
        mainArr = arr.join('').split('-');
        console.log(mainArr);
        let len = mainArr.length;
        result1 = Number(mainArr[0]);
        for(let i = 1; i<len; i++){
            let v = Number(mainArr[i]);
            console.log('v : ',v);
            if(op[i] == '+')
                result1 += v;
            else if(op[i] == '-')
                result1 -=  v;
            else if(op[i] == '×')
                result1 *=  v;
            else if(op[i] == '÷'){
                if (v != 0)
                    result1 /= v;
                else{
                    result1 = "Divde by zero error";
                    break;
                }
            } // check divde by zero
        } //for loop - mainArr
        input.innerHTML = result1;
        prevStr = result1;
        if(result1 == "Divde by zero error"){
            arr = [];
            currentString = '';
            lastChar = '';
        }
        else {
            arr = [result1];
            currentString = result1;
            lastChar = currentString[currentString.length-1];
        }
        op = [0];
        console.log('result1 :',result1, ' arr[result] ',arr);

    }); // event Listener Result


} // onload fun

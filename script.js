let currentNum ='';
let nextNum = '';
let currentOperator;
let check =false;
let newDiv;
let screen = document.querySelector(".screen");
let equals1;
let equalsCheck =false;
let saveOperator;



function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function mod(a,b){
    return a%b;
}

function operate(mathFunction,a,b){

    if(mathFunction === "add"){

    return add(a,b);
    }
    if(mathFunction === "subtract"){
        return subtract(a,b);
        }
    if(mathFunction === "multiply"){
        return multiply(a,b);
        }
    

    if(mathFunction === "divide"){
        return divide(a,b);
        } 
    if(mathFunction === "mod"){
        return mod(a,b);
        } 
}


function addNumberNext(){
    let screen = document.querySelector(".screen");
    let numbers = document.querySelectorAll('button.number');
    numbers.forEach((number) => number.addEventListener('click',function(e){
        if(screen.childNodes.length >=11){
            console.log(screen.childNodes);
        } 
        else if(check===true){
            newDiv = document.createElement('div');
            newDiv.textContent = number.textContent;
            screen.appendChild(newDiv);
            nextNum+=number.textContent;
            console.log(nextNum);

            if(nextNum.includes('.')){
                nextNum= parseFloat(nextNum);
                console.log(nextNum);
                console.log('lol');
            }else{
                nextNum = Number(nextNum);

            }
            
  
        }
        else{
            newDiv = document.createElement('div');
            newDiv.textContent = number.textContent;
            screen.appendChild(newDiv);
            currentNum+=number.textContent;
            console.log(currentNum);


            if(currentNum.includes('.')){
                currentNum= parseFloat(currentNum);
                console.log(currentNum);
                console.log('lol');
            }else{
                currentNum = Number(currentNum);

            }
            

        }
    }));
}

function clear(){
    
    let clear = document.querySelector('#clear');

  
    clear.addEventListener('click', function(e){
        
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
          }
          check=false;
          currentNum = "";
          nextNum = "";
    }); 
}


function operatorClear(){
    
        screen = document.querySelector(".screen");

        
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
          }
    }
    

function selectOperator(){
    let operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach((button) => button.addEventListener('click', function(e){
        if(check){
            saveOperator = currentOperator;
        }
        check = true;
        currentOperator = button.getAttribute('id');


       

        operatorClear();
        if(currentNum !='' && nextNum !=''){
            equalsNoClick();
        }
    }));

}

function equalsNoClick(){

        equalsCheck =true;
        equals1 = document.querySelector('#equals');
        newDiv = document.createElement('div');
        console.log(currentNum);
        console.log(nextNum);
        newDiv.textContent = operate(saveOperator,currentNum,nextNum);
        currentNum = Number(operate(saveOperator,currentNum,nextNum));
        operatorClear();
        nextNum ='';
        screen.appendChild(newDiv);

}

function equals(){

    equalsCheck =true;
    equals1 = document.querySelector('#equals');
    equals1.addEventListener('click',function(e){
        newDiv = document.createElement('div');
      

        console.log(currentNum);
        console.log(nextNum);

        newDiv.textContent = operate(currentOperator,currentNum,nextNum);
        currentNum = Number(operate(currentOperator,currentNum,nextNum));
        operatorClear();
        nextNum ='';
        screen.appendChild(newDiv);

    });
}

function decimal(){
    let decimal = document.querySelector('#decimal');
    decimal.addEventListener('click', function(e){
        if(screen.childNodes.length >=11){
            console.log(screen.childNodes);
        } 
        else if(check===true){
            newDiv = document.createElement('div');
            newDiv.textContent = number.textContent;
            screen.appendChild(newDiv);
            nextNum+=number.textContent;
            nextNum = Number(nextNum);

        }
        else{
            newDiv = document.createElement('div');
            newDiv.textContent = number.textContent;
            screen.appendChild(newDiv);
            currentNum+=number.textContent;
            currentNum = Number(currentNum);
            

        }
    });

    }


selectOperator();
clear();
addNumberNext();
equals();

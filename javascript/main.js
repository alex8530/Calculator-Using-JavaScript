//get all digit with .
const keys  = document.querySelectorAll('.numbers .key');
const operators = ['+', '-', '*', '/'];
const inputTyping = document.querySelector('#input-typ') ; 
const inputResult = document.querySelector('#input-result') ; 

//add evnet listoner for all digit
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e)=>{
       addListenerForEachKeyAndGetResualt(e.target.innerHTML);
    });
  
    function addListenerForEachKeyAndGetResualt(valuePressedDigit){
        
        //this valuePressedDigit will come when i press into the calculater , for example 0 ,1 ,2 ,+ ...
       
         switch(valuePressedDigit) {
            case 'C': 
                inputTyping.innerHTML = ''; 
                inputResult.innerHTML = '';
                removeError();
                break;
            case '=':
                getResultWhenEqual();
                break;
            default: 
                 //check if key= operator
                if(operators.indexOf(valuePressedDigit) > -1) {
                     getResultWhenOperator(valuePressedDigit);
                }else{
                    //any key number 
                    inputTyping.innerHTML +=  valuePressedDigit;
                }
           } 
 
 }


function getResultWhenEqual(){
    let data = inputTyping.innerHTML;
    let lastChar = data[data.length - 1];
    console.log(data);
     //Pressing '=' before entering all of the numbers or an operator should show error message.
    if(inputTyping.innerHTML.length==0 ||inputTyping.innerHTML==' '){
         //thats mean is empty
         showError();
        return;
     }else{
        removeError();

    }
     // If last character an operator or a decimal, remove it
    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
    data = data.replace(/.$/, '');

    
    if(data) 
        
         inputResult.innerHTML =Math.round(eval(data) * 100) / 100;
}
  
            
function getResultWhenOperator(valuePressed){
    //check if key= operator
    if( inputTyping.innerHTML == '' && valuePressed == '-')  
    inputTyping.innerHTML += valuePressed;
    let lastChar = inputTyping.innerHTML[inputTyping.innerHTML.length - 1];
   //Add operator only if not enpty and last char not operator
   if(inputTyping.innerHTML != '' && operators.indexOf(lastChar) == -1) 
   inputTyping.innerHTML += valuePressed;

  // Replace the last operator that i press
  if(operators.indexOf(lastChar) > -1 &&  inputTyping.innerHTML.length > 1) {
       inputTyping.innerHTML = inputTyping.innerHTML.replace(/.$/, valuePressed);
  }
}}
function showError(){
    let error = document.querySelector('.error');
    error.style.cssText="color: red;display: block;";
}
function removeError(){
    let error = document.querySelector('.error');
    error.style.cssText="color: red;display: none;";
}
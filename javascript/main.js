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
     
    // If last character an operator or a decimal, remove it
    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
    data = data.replace(/.$/, '');
    
    if(data) 
         inputResult.innerHTML = eval(data);
}
  
            
function getResultWhenOperator(valuePressed ){
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

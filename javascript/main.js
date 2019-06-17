//get all digit with .
var keys  = document.querySelectorAll('.numbers .key');
var operators = ['+', '-', '*', '/'];
var inputTyping = document.querySelector('#input-typ') ; 
var inputResult = document.querySelector('#input-result') ; 

//add evnet listoner for all digit
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e)=>{
       getResult(e.target.innerHTML);
    });
  

    function getResult(valuePressedDigit){
        
        //this valuePressedDigit will come when i press into the calculater , for example 0 ,1 ,2 ,+ ...
        // If clear key is pressed , clear !
        if(valuePressedDigit == 'C') {
            inputTyping.innerHTML = ''; 
            inputResult.innerHTML = ''; 
        }else if(valuePressedDigit == '=') {
            getResultWhenEqual();
        }else if(operators.indexOf(valuePressedDigit) > -1) {
            //check if key= operator
        getResultWhenOperator(valuePressedDigit);
        }else{
            //any key number 
            inputTyping.innerHTML +=  valuePressedDigit;
        }
    }
}


function getResultWhenEqual(){
    var data = inputTyping.innerHTML;
    var lastChar = data[data.length - 1];
     
    // If last character an operator or a decimal, remove it
    if(operators.indexOf(lastChar) > -1 || lastChar == '.')
    data = data.replace(/.$/, '');
    
    if(data) 
         inputResult.innerHTML = eval(data);
}
  
            
function getResultWhenOperator(valuePressed ){
    if( inputTyping.innerHTML == '' && valuePressed == '-')  
    inputTyping.innerHTML += valuePressed;
  var lastChar = inputTyping.innerHTML[inputTyping.innerHTML.length - 1];
   //Add operator only if not enpty and last char not operator
   if(inputTyping.innerHTML != '' && operators.indexOf(lastChar) == -1) 
   inputTyping.innerHTML += valuePressed;

  // Replace the last operator that i press
  if(operators.indexOf(lastChar) > -1 &&  inputTyping.innerHTML.length > 1) {
       inputTyping.innerHTML = inputTyping.innerHTML.replace(/.$/, valuePressed);
  }
}

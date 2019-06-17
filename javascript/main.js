//get all digit with .
var keys  = document.querySelectorAll('.numbers .key');
var operators = ['+', '-', '*', '/'];


//add evnet listoner for all digit
for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e)=>{
       getResult(e.target.innerHTML);
    });
  

function getResult(valuePressedDigit){
    
 
    //this valuePressedDigit will come when i press into the calculater , for example 0 ,1 ,2 ...
    var inputTyping = document.querySelector('#input-typ') ; 


     	// If clear key is pressed , clear !
		if(valuePressedDigit == 'C') {
			inputTyping.innerHTML = '';
         }
         
         // If eval key is pressed, calculate and display the result
         else if(valuePressedDigit == '=') {
             var equation = inputTyping.innerHTML;
             var lastChar = equation[equation.length - 1];
              
             // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
             if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                 equation = equation.replace(/.$/, '');
             
             if(equation) 
                 inputTyping.innerHTML = eval(equation);
          }	
          
          else if(operators.indexOf(valuePressedDigit) > -1) {
			// Operator is clicked
			// Get the last character 
			var lastChar = inputTyping.innerHTML[inputTyping.innerHTML.length - 1];
			
			
			// Allow minus if the string is empty
			 if( inputTyping.innerHTML == '' && valuePressedDigit == '-')  
              inputTyping.innerHTML += valuePressedDigit;
 
			
			 //Add operator only if not enpty and last char not operator
             if(inputTyping.innerHTML != '' && operators.indexOf(lastChar) == -1) 
             inputTyping.innerHTML += valuePressedDigit;

			// Replace the last operator that i press
			if(operators.indexOf(lastChar) > -1 &&  inputTyping.innerHTML.length > 1) {
 				inputTyping.innerHTML = inputTyping.innerHTML.replace(/.$/, valuePressedDigit);
			}
			 
		}
          else{
           inputTyping.innerHTML +=  valuePressedDigit;

          }
         

 }
}

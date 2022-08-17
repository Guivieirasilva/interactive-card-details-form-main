/*Name Elements */
const inputName = document.getElementById('InputName')
const cardName = document.getElementById('card-holder-name')

/*Number Elements */
const inputNumber = document.getElementById("cardnumber");
const cardNumber = document.getElementById("card-number");

/*Expired Elements */
const inputMonth = document.getElementById("expMM")
const inputYear = document.getElementById("expYY")
const cardMonth = document.getElementById("exp-m");
const cardYear = document.getElementById("exp-y");

/*CVC Elements */
const inputCvc = document.getElementById("cvcInput");
const cardCvc = document.getElementById("cvc");


function InputCardName(){
   cardName.innerHTML = inputName.value;
   
   if(inputName.value.length >= "25"){
      cardName.style.fontSize = "0.8rem"
   } else {
      cardName.innerHTML = inputName.value;
   }

   if(cardName.innerHTML == ""){
      cardName.innerHTML = inputName.placeholder
   }
}   

function InputCardNum(){

   cardNumber.innerHTML = inputNumber.value 

   inputNumber.addEventListener('keypress',() => {
      let inputLength = inputNumber.value.length
   
      if(inputLength === 4 || inputLength === 9 || inputLength === 14 ){
         inputNumber.value += " "
      }
   })
}

function InputMM(){ cardMonth.innerHTML = inputMonth.value }
function InputYY(){ cardYear.innerHTML = inputYear.value }
function InputCVC(){ cardCvc.innerHTML = inputCvc.value }


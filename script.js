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

/*Sucess/Error Elements  */
const sucessScreen = document.getElementById("sucess");
const errorInputExp = document.getElementById("errorExp");
const errorInputCvc = document.getElementById("error-cvc");
const myForm = document.getElementById("myForm")
const loading = document.getElementsByClassName("c-loader")

/* buttons */
const submitBtn = document.getElementById("submit")
const continueBtn = document.getElementById("continue")


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
function InputCVC(){ 
   let formatCVC = inputCvc.value;
   formatCVC = formatCVC.substring(0,3);
   inputCvc.value = formatCVC;
   if(inputCvc.value === ""){
      cardCvc.innerHTML = "000"
   }else{
   cardCvc.innerHTML = inputCvc.value 
   }
}
function validationInputs(){
   
   const validateName = () => {
      let cardHolderExp = /^[A-Z a-z]+$/;
      let erroMsg = document.getElementById("errorMsg");
      if(cardName.value.match(cardHolderExp)){
         erroMsg.textContent = ""
      }else {
         erroMsg.innerHTML = "Favor Informe um nome valido."
      }
   }

   const validadeCard = () =>{
      let errorNumber = document.getElementById("errorMsgNum");
      if(inputNumber.value.length > 0 && inputNumber.value.length < 19){
         errorNumber.innerHTML = "formato incorreto!"
      } else if (inputNumber.value == ""){
         inputNumber.innerHTML = "não pode ficar em branco!"
      }else{
         errorNumber.innerHTML = ""
      }
   }
   
}

// submitBtn.addEventListener("click", (e) => {
//    e.preventDefault()
//    setTimeout(() => {
//       myForm.style.display = "none";
//       sucessScreen.style.display = "flex"
//    },1000)
// })
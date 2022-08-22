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
const myForm = document.getElementById("myForm")
const loading = document.getElementsByClassName("c-loader")

/* buttons */
const submitBtn = document.getElementById("submit")
const continueBtn = document.getElementById("continue")


function InputCardName(){
   cardName.innerHTML = inputName.value;
   
   if(inputName.value.length >= "18"){
      cardName.style.fontSize = "0.7rem"
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
function validateInputs(){

   const validateName = () => {
      let erroMsg = document.getElementById("errorMsg")
      if(inputName.value == ""){
         inputName.style.border = "var(--erro)"
         erroMsg.innerHTML = "Não pode ficar em branco!"
      }
   }

   const validateNumber = () => {
      let erroMsgNum = document.getElementById("errorMsgNum")
      if(inputNumber.value == ""){
         inputNumber.style.border = "var(--erro)"
         erroMsgNum.innerHTML = "Não pode ficar em branco!"
      } else if (inputNumber.value.length > 19){
         inputNumber.style.border = "var(--erro)"
         erroMsgNum.innerHTML = "Valor inválido"
      } else {
         erroMsgNum.innerHTML = ""

      }
   }

   const validateExp = () => {
      let errorInputExp = document.getElementById("errorExp");
      if(inputMonth.value == "" && inputYear.value == ""){
         inputMonth.style.border = "var(--erro)"
         inputYear.style.border = "var(--erro)"
         errorInputExp.innerHTML = "Não pode ficar em branco!"
      } else if (inputMonth.value > "12" || inputYear.value < "22") {
         inputMonth.style.border = "var(--erro)"
         inputYear.style.border = "var(--erro)"
         errorInputExp.innerHTML = "Data Invalida!"
      }else {
         errorInputExp.innerHTML = ""
      }
   }
   
   const validateCvc = () => {
      let errorCvc = document.getElementById("error-cvc")
      if(inputCvc.value == ""){
         inputCvc.style.border = "var(--erro)"
         errorCvc.innerHTML = "Não pode ficar em branco!"
      }else{
         errorCvc.innerHTML = ""
      }
   }

   validateNumber()
   validateName()
   validateExp()
   validateCvc()

   if(inputName.value == "" ||
      inputNumber.value == "" ||
      inputMonth.value == "" ||
      inputYear.value == "" ||
      inputCvc.value == "")
      {
         return false
      }else {
         return true
      }
}

submitBtn.addEventListener("click", (event) => {
   validateInputs();
   if (validateInputs() == false){
      event.preventDefault();
   } else {
      event.preventDefault()
      myForm.style.display = "none";
      sucessScreen.style.display = "flex" 
   }
})
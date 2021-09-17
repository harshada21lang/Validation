
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobileno = document.getElementById("mobileno");
const password = document.getElementById("password");
const togglePassword = document.querySelector("#togglePassword");
const cfmpassword = document.getElementById("cfmpassword");
const gender = document.getElementById("gender");

//add event

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    validate();
})

const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert("Registration Successful");
        swal("Welcome! "+usernameVal, "Regsitration Successful" , "success");
    }
}

//for final data validation
const successMsg = (usernameVal) => {
    let formCont = document.getElementsByClassName("form-control");
    var count = formCont.length - 1;
    for(var i=0; i<formCont.length; i++) {
        if(formCont[i].className === "form-control success"){
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
}


//more email validation
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

// Define the validate function


    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const mobilenoVal = mobileno.value.trim();
    const passwordVal = password.value.trim();
    const cfmpasswordVal = cfmpassword.value.trim(); 
    const genderVal = gender.value.trim();
    
    successMsg(usernameVal);


    function usernameValid(event){
        let usernameVal = event.target.value;
    
        //validate username 
        if(usernameVal === ""){
            setErrorMsg(username, "username cannot be blank.");
        }
        else if(usernameVal.length <= 2){
            setErrorMsg(username, "minimum 3 characters");
        }else{
            setSuccessMsg(username);
        }
        
    }
    
    function emailValid(event){
        let emailVal = event.target.value;
    
        //validate email
        if(emailVal === ""){
            setErrorMsg(email, "email cannot be blank.");
        }
        else if(!isEmail(emailVal)){
            setErrorMsg(email, "Not a valid Email.");
        }else{
            setSuccessMsg(email);
        }
    }
    
    function mblValid(event){
        let mobilenoVal = event.target.value;
    
        // validate Mobile number
        if(mobilenoVal === ""){
            setErrorMsg(mobileno, "Mobile Number cannot be blank.");
        }
        else if(mobilenoVal.length < 10){
            setErrorMsg(mobileno, "Not a valid Mobile no.");
        }else{
            setSuccessMsg(mobileno);
        }
    }
    
    function passValid(event){ 
        let passwordVal= event.target.value;

        // validate password
        if(passwordVal === ""){
            setErrorMsg(password, "Password cannot be blank.");
        }
        else if(passwordVal.length <= 5){
            setErrorMsg(password, "Minimum 6 characters.");
        }else if(passwordVal.length >= 15){
            setErrorMsg(password, "Less than 15 characters.");
        }else{
            setSuccessMsg(password);
        }
    }
    
    function cfmpassValid(event){
        let cfmpasswordVal = event.target.value;
    
        //validate confirm password
        if(cfmpasswordVal === ""){
            setErrorMsg(cfmpassword, "Confirm Password cannot be blank.");
        }
        else if(passwordVal != cfmpasswordVal){
            setErrorMsg(cfmpassword, "Password must be same as above.");
        }else{
            setSuccessMsg(cfmpassword);
        }
    }


function genderValid(event){
    if(genderVal ===""){
        setErrorMsg(gender, "Gender cannot be blank.");
    }else{
        setSuccessMsg(gender);
    }
}

togglePassword.addEventListener("click", function(e){
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("fa-eye");
});

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
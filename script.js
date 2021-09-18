
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobileno = document.getElementById("mobileno");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");
const cfmpassword = document.getElementById("cfmpassword");
const gender = document.getElementById("gender");


//add event
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    if(usernameValid() == true && emailValid() == true && mblValid() == true && passValid() == true && cfmpassValid() == true)
    {
        alert("Registration Successful");
        swal("Welcome! ", "Regsitration Successful" , "success");
    }
});

    function usernameValid(){
        var usernameVal = document.getElementById("username").value;
    
        //validate username 
        if(usernameVal === ""){
            setErrorMsg(username, "username cannot be blank.");
            return false;
        }
        else if(usernameVal.length <= 2){
            setErrorMsg(username, "minimum 3 characters");
            return false;
        }else{
            setSuccessMsg(username);
            return true;
        }
        
    }
    
    function emailValid(){
        let emailVal = document.getElementById("email").value;
        //more email validation
        const isEmail = (emailVal) => {
            var atSymbol = emailVal.indexOf("@");
            if(atSymbol < 1) return false;
            var dot = emailVal.lastIndexOf(".");
            if(dot <= atSymbol + 3) return false;
            if(dot === emailVal.length - 1) return false;
            return true;
        }
    
        //validate email
        if(emailVal === ""){
            setErrorMsg(email, "email cannot be blank.");
            return false;
        }
        else if(!isEmail(emailVal)){
            setErrorMsg(email, "Not a valid Email.");
            return false;
        }else{
            setSuccessMsg(email);
            return true;
        }        

    }
    
    function mblValid(){
        let mobilenoVal = document.getElementById("mobileno").value;
    
        // validate Mobile number
        if(mobilenoVal === ""){
            setErrorMsg(mobileno, "Mobile Number cannot be blank.");
        }
        else if(mobilenoVal.length < 10){
            setErrorMsg(mobileno, "Not a valid Mobile no.");
        }else{
            setSuccessMsg(mobileno);
        }
        return true;
    }
    
    function passValid(){ 
        let passwordVal= document.getElementById("password").value;

        // validate password
        if(passwordVal === ""){
            setErrorMsg(password, "Password cannot be blank.");
            return false;
        }
        else if(passwordVal.length <= 5){
            setErrorMsg(password, "Minimum 6 characters.");
            return false;
        }else if(passwordVal.length >= 15){
            setErrorMsg(password, "Less than 15 characters.");
            return false;
        }else{
            setSuccessMsg(password);
            return true;
        }
        
    }
    
    function cfmpassValid(){
        let cfmpasswordVal = document.getElementById("cfmpassword").value;
        let password1 = document.getElementById("password").value;
        //validate confirm password
        if(cfmpasswordVal === ""){
            setErrorMsg(cfmpassword, "Confirm Password cannot be blank.");
            return false;
        }
        else if(password1 != cfmpasswordVal){
            setErrorMsg(cfmpassword, "Password must be same as above.");
            return false;
        }else{
            setSuccessMsg(cfmpassword);
            return true;
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
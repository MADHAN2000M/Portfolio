
document.getElementById("Form-Validation").addEventListener("submit",function(event){
    
    event.preventDefault()

    let userName=document.getElementById("username").value.trim()
    let password=document.getElementById("password").value.trim()
    let email=document.getElementById("email").value.trim()
    let comformPassword=document.getElementById("conformPassword").value.trim()

    let uNameError =document.getElementById("uNmae-error")
    let passwordError=document.getElementById("password-error")
    let emailEror=document.getElementById("email-error")
    let comformPasswordError=document.getElementById("cpassword-error")

    let isValid = true

    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    if(userName==""){
        uNameError.innerText="Name is required"
        isValid=false
    }
    else if(!uNamePattern.test(userName)){
        uNameError.innerText="Enter Your Full Name"
        isValid=false
    }
    else if(uNamePattern.test(userName)){
        uNameError.innerText=""
        isValid=true
    }
    
    if(email==""){
        emailEror.innerText="Email is required"
        isValid=false
    }
    else if(!emailPattern.test(email)){
        emailEror.innerText = "Enter Valid Email"
        isValid=false
    }
    else if(emailPattern.test(email)){
        emailEror.innerText = ""
        isValid=true
    }
    if(password==""){
        passwordError.innerText="Password is required"
        isValid=false
    }
    else if(password.length<3 || password.length>10){
        passwordError.innerText = " Enter a password char between 3 to 10"
        isValid=false
    }
    else if(password.length>3 || password.length<10){
        passwordError.innerText = ""
        isValid=true
    }
    if(comformPassword==""){
        comformPasswordError.innerText="Conform Password is required"
        isValid=false
    }
    else if (comformPassword !== password ){
        comformPasswordError.innerText = " Password Not Match"
        isValid=false
    }
    else if (comformPassword === password ){
        comformPasswordError.innerText = ""
        isValid=true
    }
    if(isValid){
        alert( `Hi ${userName}, Welcome to Our Website` )
        console.log(userName,email,password);
    }

})



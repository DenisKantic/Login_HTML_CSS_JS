const usernameBox = document.getElementById("username-box");
const passwordBox = document.getElementById("password-box");
const loginBtn = document.getElementById("btn");
const inputMessage = document.getElementById("resultInput");


loginBtn.addEventListener("click", checkInput);

function checkInput(event){

    event.preventDefault();

    if(usernameBox.value == ""){
        inputMessage.innerHTML = "Please enter your username";
    } else if (passwordBox.value == ""){
        inputMessage.style.color = "black";
        inputMessage.innerHTML = "Please enter your password";
    } else {

    if(usernameBox.value == "user" && passwordBox.value == "1234"){
            inputMessage.style.color = "green";
            inputMessage.innerHTML = "Login successful";
            window.location = "./sidebar.html";
    } else {
        inputMessage.style.color = "red";
        inputMessage.innerHTML = "Username or password is incorrect";
    }
}
}
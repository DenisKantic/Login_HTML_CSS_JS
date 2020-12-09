const usernameBox = document.getElementById("username-box");
const passwordBox = document.getElementById("password-box");
const loginBtn = document.getElementById("btn");
const inputMessage = document.getElementById("resultInput");


loginBtn.addEventListener("click", checkInput);

function checkInput(event){

    event.preventDefault();

    if(usernameBox.value == "user" && passwordBox.value == "1234"){
            inputMessage.style.color = "green";
            inputMessage.innerHTML = "Login successful";
    } else {
        inputMessage.style.color = "red";
        inputMessage.innerHTML = "Username or password is incorrect";
    }
}
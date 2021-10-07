const userName = document.querySelector("#userName");
const userSurname = document.querySelector("#userSurname");
const userEmail = document.querySelector("#userEmail");
const userPhone = document.querySelector("#userPhone");
const userFemale = document.querySelector("#userFemale");
const userMale = document.querySelector("#userMale");
const userPass1 = document.querySelector("#userPassword1");
const userPass2 = document.querySelector("#userPassword2");
const confirm = document.querySelector("#confirm");
const register = document.querySelector("#register");
let errorMessage = document.querySelector("#errorMessage");
let welcome = document.querySelector("#welcome");

confirm.addEventListener("click", function() {
    if (confirm.checked == false) {
        register.classList.add("disabled");
        register.setAttribute("disabled", true);
    }
    
    if (confirm.checked == true) {
        register.classList.remove("disabled");
        register.removeAttribute("disabled");
    }
});

userEmail.addEventListener("input", function() {
    errorMessage.innerHTML = !(userEmail.value.includes("@")) || !(userEmail.value.includes(".")) ? "Что-то не так с email, проверьте<br/>" : "";
});

userPhone.addEventListener("input", function() {
    errorMessage.innerHTML = isNaN(userPhone.value) ? "Номер телефона должен содержать только цифры<br/>" : "";
});

userPass1.addEventListener("input", function() {
    errorMessage.innerHTML = (userPass1.value.length < 5) ? "Пароль слишком короткий" : "";
});

register.addEventListener("click", function() {
    
    errorMessage.innerHTML = "";
    welcome.innerHTML = "";
    if (userPass1.value != userPass2.value) {
        errorMessage.innerHTML += "Пароли не совпадают<br/>";
    }

    errorMessage.innerHTML += (userName.value == "" || userSurname.value == "" || userEmail.value == "" || userPhone.value == "" || userPass1.value == "" || userPass2.value == "" ) ? "Все поля должны быть заполнены<br/>" : "";

    errorMessage.innerHTML +=(userFemale.checked == false && userMale.checked == false) ? "Вы не указали свой пол<br/>" : "";

    errorMessage.innerHTML += isNaN(userPhone.value) ? "Номер телефона должен содержать только цифры<br/>" : "";

    errorMessage.innerHTML +=  !(userEmail.value.includes("@")) || !(userEmail.value.includes(".")) ? "Что-то не так с email, проверьте<br/>" : "";

    errorMessage.innerHTML += (userPass1.value.length < 5) ? "Пароль слишком короткий" : "";
console.log(errorMessage.innerHTML);
    if (errorMessage.innerHTML == "") {
        welcome.innerHTML =`Добро пожаловать, ${userName.value}!`;
    } 
});


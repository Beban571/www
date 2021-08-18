const users = { email: "demcolone322@gmail.com", password: 123456 }

const email = document.querySelector("#email");

const password = document.querySelector("password");

const content2 = document.querySelector("content2");

content2.onsubmit = function(e) {
    e.preventdefault();
    
    alert(`email: ${email.value} password: ${password.value}`)
    console.log(email.value);
}
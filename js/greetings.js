const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const removeBtn = document.querySelector("#remover");

const HIDDEN_CLASSNAME = "hidden"; // string만 들어있다면 알기쉽게 대문자로 만들어주자
const USERNAME_KEY = "username";


function LoginSubmit(event){
    event.preventDefault(); // browser의 기본동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

loginForm.addEventListener("submit",LoginSubmit);

function paintGreetings(username){
    greeting.innerText = username
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    removeBtn.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 있는 정보를 가져온다.
const saveUsername = localStorage.getItem(USERNAME_KEY);


// 만약 정보가 없다면
if(saveUsername === null){
    // 창을 띄운다. = hidden제거
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",LoginSubmit);
}else{
    paintGreetings(saveUsername);
}

function remover(){
    localStorage.removeItem(USERNAME_KEY)
    window.location.reload(); // 새로고침
}

removeBtn.addEventListener("click",remover)
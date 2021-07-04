const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);              //submit event가 발생하면 login-form id에 hidden class 추가하여 사라지게 하기
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);           //local storage에 key(userName), value(input에 입력한 이름)으로 저장
    paintGreetings(userName);
}

function paintGreetings(userName){                          //외부에서 savedUsername을 argument로서 호출하면 (=이미 local storage에 value가 저장되어 있으면=밑에 if문) local storage에 저장된 value를 화면에 보여준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {                                        
loginForm.classList.remove(HIDDEN_CLASSNAME);                       //local storage에 아무 데이터가 없다면 form태그를 보여준다
    loginForm.addEventListener("submit", onLoginSubmit);            //local storage에 username(value)가 submit되면 onLoginSubmit 함수 실행
} else {
    paintGreetings(savedUsername);
}
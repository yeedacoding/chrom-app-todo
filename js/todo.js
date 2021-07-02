// To do list 만들기, 지우기, 저장하기, 저장한 값 불러오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];                                       //입력한 todo를 넣을 list

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;        //event.target의 부모 요소가 무엇인지 알게 해줌
    deleteLi.remove();
}

function paintToDo(newTodo) {                           //4. paintToDo function의 매개변수로 받고
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;                           //5. span태그 안에 input에 입력한 value가 들어간다 
    const button = document.createElement("button");            //list를 삭제할 button을 만듦
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);                               //6. li태그 안에 span태그를 넣은 뒤
    li.appendChild(button);                                     //button을 li에 포함시키기
    toDoList.appendChild(li);                           //7. todo-list(ul태그의 id)안에 li를 넣어주기
}

function handleToDoSubmit(event) {              
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";                                 //1. input에 입력한 후 input을 비우고
    toDos.push(newTodo);
    paintToDo(newTodo);                                 //2. input에 입력한 value가
    saveToDos();                                        //3. saveToDos array안에 저장되고
}

toDoForm.addEventListener("submit", handleToDoSubmit);